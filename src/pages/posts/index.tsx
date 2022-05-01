import React, { useContext, useEffect, useState } from 'react';
import { GetStaticProps } from "next";

import SEO from "../../components/SEO";
import { Categories } from "../../components/Posts/Categories";
import { Masonry } from  '../../components/Posts/Masonry'

import { sizes } from '../../services/constants'
import { calcTextSize, postsFilter } from "../../services/utils";
import useDeviceDetect from "../../hooks/useDevice";
import StoreContext from '../../context/store'

import { mock_posts } from '../../mockdata/posts'
import { IPostsProps, IPost } from '../../types'

import styles from './styles.module.scss'

export default function Posts({ posts }: IPostsProps) {

  const { isMobile } = useDeviceDetect()
  const { state } = useContext(StoreContext)
  const [ filteredPosts, setFilteredPosts ] = useState<IPost[]>([])
  
  useEffect(() => {
    setFilteredPosts(
      postsFilter(state.search, posts)
    )

  }, [state.search])

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


export const getStaticProps: GetStaticProps = async () => {
  const posts = mock_posts.map(post => {
    const selected = calcTextSize(post.title)
    return { ...post, style: sizes[selected] }
  })

  return {
    props: {
      posts,
    },
    revalidate: 60 * 60 * 120
  }
}