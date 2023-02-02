import React, { useContext, useEffect, useState } from 'react';
import { GetStaticProps } from "next";

import { SEO } from "components/Shared";
import { Categories } from "components/Posts/Categories";
import { Masonry } from  'components/Posts/Masonry'
import { adapter } from 'services/adapter'

import { getDeduplicatedCategories, postsFilterBySearch, postsFilterByStatus } from "services/utils";
import useDeviceDetect from "hooks/useDevice";
import StoreContext from 'context/search/store'

import { getAllPosts } from 'services/http/Admin/Posts/client';
import { PostModel } from 'models/Post';

import { IPostsProps, IPost } from 'types'
import styles from './styles.module.scss'

export default function Posts({ posts, categories }: IPostsProps) {

  const { isMobile } = useDeviceDetect()
  const { state } = useContext(StoreContext)
  const [ filteredPosts, setFilteredPosts ] = useState<IPost[]>([])

  useEffect(() => {
    setFilteredPosts(
      postsFilterBySearch(posts, state.search)
    )
  }, [state.search])

  return (
    <>
      <SEO
        title={`Posts`}
        description="Quer saber como ser um programador? Confira nossos posts e seja bem vindo ao mundo da programação!"
        keywords={`${state.search}, programação, estudos, tecnologia, computação, games, web, aplicativos, carreira em ti, desenvolvimento profissional, mercado de ti`}
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

          {/* { !isMobile &&
            <ins
              className={"adsbygoogle " + styles.fake_col}
              style={{ display: 'block' }}
              data-ad-client="ca-pub-1739197497968733"
              data-ad-slot="7846772608"
              data-ad-format="auto"
              data-full-width-responsive="true"
            />
          } */}
        </section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {

  const data = await getAllPosts()

  if (!data || data.posts.length == 0) {
    return {
      props: {
        posts: [],
        categories: []
      }
    }
  }

  const filteredPosts = postsFilterByStatus(data.posts, 'prod')
  const categories = getDeduplicatedCategories(filteredPosts)
  const posts = filteredPosts.map(content => adapter(content as PostModel))

  return {
    props: {
      posts,
      categories
    },
    revalidate: 60 * 60 * 24
  }
}
