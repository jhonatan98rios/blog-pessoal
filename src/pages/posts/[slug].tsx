import React, { useContext, useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

import SEO from "../../components/Shared/SEO";
import { Masonry } from "../../components/Posts/Masonry";
import { Categories } from "../../components/Posts/Categories";

import useDeviceDetect from "../../hooks/useDevice";
import { sizes } from '../../services/constants'
import { postsFilter } from "../../services/utils";
import StoreContext from "../../context/store";

import { IPostsProps, IPost } from '../../types'

import styles from './styles.module.scss'
import { getAllPosts } from "../../services/client";
import { adapter } from "../../services/adapter";

export default function FilteredPosts({ posts }: IPostsProps) {

  const router = useRouter()
  const { isMobile } = useDeviceDetect()
  const { state, setState } = useContext(StoreContext)
  const [ filteredPosts, setFilteredPosts ] = useState<IPost[]>([])

  useEffect(() => {
    setState({ ...state, search: '' })
  }, [])

  useEffect(() => {
    setFilteredPosts(
      postsFilter(state.search, posts)
    )

  }, [state.search, router.asPath])

  return (
    <>
      <SEO title="Posts" />
      
      <main>
        { isMobile && 
          <Categories /> 
        }
        <section className={styles.container}>
          { !isMobile &&
           <Categories /> 
          }

          <Masonry posts={filteredPosts} />

          { !isMobile && 
            <span className={styles.fake_col}></span>  
          }
        </section>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {

  const allPosts = await getAllPosts()
  const paths = allPosts.map(
    (post) => post.categories.split(',').map(
      (cat) => `/posts/${cat}`
    )
  ).flat()

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const data = await getAllPosts()
  let posts = data
  .filter(post => post.categories.includes(`${params.slug}`) )
  .map(content => adapter(content))

  return {
    props: { posts },
    revalidate: 60 * 60 * 120
  }
}

