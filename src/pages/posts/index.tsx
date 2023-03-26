import React, { useContext, useEffect, useState } from 'react';
import { GetStaticProps } from "next";

import { SEO } from "components/Shared";
import { Categories } from "components/Posts/Categories";
import { Masonry } from  'components/Posts/Masonry'
import { adapter } from 'services/adapter'

import { getDeduplicatedCategories, postsFilterBySearch, postsFilterByStatus } from "services/utils";
import useDeviceDetect from "hooks/useDevice";
import StoreContext from 'context/search/store'

import { PostModel } from 'models/Post';

import { IPostsProps, IPost } from 'types'
import styles from './styles.module.scss'
import { AxiosHttpClient } from 'infra/http/AxiosHttpClient';
import Notification from 'infra/errors/Notification';
import { GetPostService } from 'services/http/Admin/Posts/GetPostService';
import { AdBanner } from 'components/Shared/AdBanner';

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
          <h1 className="no-display"> Todos os posts </h1>

          { !isMobile &&
           <Categories categories={categories} />
          }

          <Masonry posts={filteredPosts} />

        </section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {

  const httpService = AxiosHttpClient.getInstance()
  const notification = new Notification()
  const getPostService = new GetPostService(httpService, notification)
  const res = await getPostService.execute()

  if (!res || res.posts.length == 0) {
    return {
      props: {
        posts: [],
        categories: []
      }
    }
  }

  const filteredPosts = postsFilterByStatus(res.posts, 'prod')
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
