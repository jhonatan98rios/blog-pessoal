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

import { mock_posts } from '../../mockdata/posts'
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

  const paths = mock_posts.map(
    (post) => post.categories.map(
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

  let posts = data.map(content => {
    let post = adapter(content)

    const text_size = post.title.length
    const selected = text_size > 100 ? 'xbig' :
      text_size > 75 ? 'big' :
      text_size > 50 ? 'medium' :
      text_size > 25 ? 'small' :
      'xsmall'

    const style = sizes[selected]
    return { ...post, style }
  })

  posts = posts.filter(post => post.categories.includes(`${params.slug}`) )

  console.log(posts)
  console.log('>>>> filtered_posts')


  return {
    props: { posts },
    revalidate: 60 * 60 * 120
  }
}

