import React, { useContext, useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

import useDeviceDetect from "hooks/useDevice";
import StoreContext from "context/search/store";

import { SEO, NavigationControl } from "components/Shared";
import { Masonry } from "components/Posts/Masonry";
import { Categories } from "components/Posts/Categories";

import { adapter } from "services/adapter";
import { getDeduplicatedCategories, postsFilterBySearch, postsFilterByStatus } from "services/utils";
import { PostModel } from "models/Post";

import { IPostsProps, IPost } from 'types'
import styles from './styles.module.scss'
import { AxiosHttpClient } from "infra/http/AxiosHttpClient";
import Notification from "infra/errors/Notification";
import { GetPostService } from "services/http/Admin/Posts/GetPostService";

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
      postsFilterBySearch(posts, state.search)
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

        <NavigationControl previousPath="/posts/" />

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

export const getStaticPaths: GetStaticPaths = async () => {

  const httpService = AxiosHttpClient.getInstance()
  const notification = new Notification()
  const getPostService = new GetPostService(httpService, notification)
  const res = await getPostService.execute()
  const filteredPosts = postsFilterByStatus(res.posts, 'prod')

  const paths = filteredPosts.map(
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

  const httpService = AxiosHttpClient.getInstance()
  const notification = new Notification()
  const getPostService = new GetPostService(httpService, notification)
  const res = await getPostService.execute()

  if (!res) {
    return {
      props: {
        posts: [],
        categories: []
      }
    }
  }

  const filteredPosts = postsFilterByStatus(res.posts, 'prod')
  const categories = getDeduplicatedCategories(filteredPosts)
  const posts = (filteredPosts.length > 0 ? filteredPosts : [])
    .map(content => adapter(content as PostModel))
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
    revalidate: 60 * 60 * 24
  }
}

