import React, { useContext } from 'react';

import { GetStaticProps } from "next";
import SEO from "../../components/SEO";
import { FlexiblePost } from "../../components/Posts/FlexiblePost";
import useDeviceDetect from "../../hooks/useDevice";
import { Categories } from "../../components/Posts/Categories";
/* import { Carousel } from '../../components/Carousel' */

import styles from './styles.module.scss'
import { mock_posts } from '../../mockdata/posts'
import { sizes } from '../../services/constants'
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { postsFilter } from "../../services/utils";

import StoreContext from '../../context/store'

interface IImage {
  src: string
  alt: string
  title: string
}

interface IPost {
  slug: string
  title: string
  image: IImage
  updateAt: string
  categories: string[]
  style: object
}

interface IPostsProps {
  posts: IPost[]
}

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

          <div className={styles.posts}>

            { filteredPosts && 
              filteredPosts.map((post, index) => (
                <FlexiblePost post={post} key={index} 
                  customStyle={{ ...post.style }}
                />
              ))
            }
          </div>

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

    const text_size = post.title.length
    const selected = text_size > 100 ? 'xbig' :
      text_size > 75 ? 'big' :
      text_size > 50 ? 'medium' :
      text_size > 25 ? 'small' :
      'xsmall'

    const style = sizes[selected]

    return { ...post, style }
  })

  return {
    props: {
      posts,
    },
    revalidate: 60 * 60 * 120
  }
}