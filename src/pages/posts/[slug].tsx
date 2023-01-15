import React, { useContext, useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

import SEO from "../../components/Shared/SEO";
import { Masonry } from "../../components/Posts/Masonry";
import { Categories } from "../../components/Posts/Categories";

import useDeviceDetect from "../../hooks/useDevice";
import { getDeduplicatedCategories, postsFilter } from "../../services/utils";
import StoreContext from "../../context/search/store";

import { IPostsProps, IPost } from '../../types'

import styles from './styles.module.scss'
import { getAllPosts } from "../../services/client";
import { adapter } from "../../services/adapter";

export default function FilteredPosts({ posts, categories }: IPostsProps) {

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
      <SEO
        title={`Posts | ${router.asPath.split('/')[2]}`}
        description="Quer saber como ser um programador? Confira nossos posts e seja bem vindo ao mundo da programação!"
        keywords={`${router.asPath.split('/')[2]}, programação, estudos, tecnologia, computação, games, web, aplicativos, carreira em ti, desenvolvimento profissional, mercado de ti`}
        hasADS={true}
      />
      
      <main>

        { isMobile && 
          <Categories categories={categories} /> 
        }
        <section className={styles.container}>
          <h2 className="no-display"> Posts </h2>

          { !isMobile &&
           <Categories categories={categories} /> 
          }

          <Masonry posts={filteredPosts} />

          { !isMobile && 
            <ins 
              className={"adsbygoogle " + styles.fake_col}
              style={{ display: 'block' }}
              data-ad-client="ca-pub-1739197497968733"
              data-ad-slot="7846772608"
              data-ad-format="auto"
              data-full-width-responsive="true"
            />
          }
        </section>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {

  const data = await getAllPosts()
  const paths = data.posts.map(
    (post) => post.categories.map(
      (cat) => `/posts/${cat.path}`
    )
  ).flat()

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const data = await getAllPosts()

  if (!data) {
    return {
      props: {
        posts: [],
        categories: []
      }
    }
  }

  const categories = getDeduplicatedCategories(data.posts)
  const posts = (data.posts.length > 0 ? data.posts : [])
    .map(content => adapter(content))
    .filter(post => {
      let contains = false
      post.categories.forEach(cat => {
        if (cat.path == params.slug) {
          contains = true
        }
      })
      return contains
    })

  return {
    props: { posts, categories },
    revalidate: 60 * 60 * 120
  }
}

