import React, { useContext, useEffect, useState } from 'react';
import { GetStaticProps } from "next";

import SEO from "../../components/Shared/SEO";
import { Categories } from "../../components/Posts/Categories";
import { Masonry } from  '../../components/Posts/Masonry'

import { adapter } from '../../services/adapter'

import { getAllCategories, getAllPosts } from '../../services/client'
import { postsFilter } from "../../services/utils";
import useDeviceDetect from "../../hooks/useDevice";
import StoreContext from '../../context/store'

import { IPostsProps, IPost } from '../../types'

import styles from './styles.module.scss'

export default function Posts({ posts, categories }: IPostsProps) {

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
        <h2 className="no-display"> Posts </h2>

      { isMobile && 
        <Categories categories={categories} /> 
      }

        <section className={styles.container}>
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


export const getStaticProps: GetStaticProps = async () => {

  const data = await getAllPosts()
  const categories = await getAllCategories()
  const posts = data.map(content => adapter(content))

  return {
    props: {
      posts,
      categories
    },
    revalidate: 60 * 60 * 120
  }
}