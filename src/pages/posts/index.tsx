import React, { useContext, useEffect, useState } from 'react';
import { GetStaticProps } from "next";

import SEO from "../../components/Shared/SEO";
import { Categories } from "../../components/Posts/Categories";
import { Masonry } from  '../../components/Posts/Masonry'

import { adapter } from '../../services/adapter'

import { getAllPosts } from '../../services/client'
import { postsFilter } from "../../services/utils";
import useDeviceDetect from "../../hooks/useDevice";
import StoreContext from '../../context/store'

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
      <SEO
        title={`Posts`}
        description="Quer saber como ser um programador? Confira nossos posts e seja bem vindo ao mundo da programação!"
        keywords={`${state.search}, programação, estudos, tecnologia, computação, games, web, aplicativos, carreira em ti, desenvolvimento profissional, mercado de ti`}
      />
      
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

  const data = await getAllPosts()
  const posts = data.map(content => adapter(content))

  return {
    props: {
      posts,
    },
    revalidate: 60 * 60 * 120
  }
}