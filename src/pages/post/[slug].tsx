import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router'
import React from 'react';

import { adapter } from 'services/adapter';
import { postsFilterByStatus } from 'services/utils';
import { PostModel } from 'models/Post';

import { Recents } from 'components/Post/Recents';
import { SEO, NavigationControl } from 'components/Shared';

import { PostProps } from 'types'
import styles from './styles.module.scss'
import { AxiosHttpClient } from 'infra/http/AxiosHttpClient';
import Notification from 'infra/errors/Notification';
import { GetPostService } from 'services/http/Admin/Posts/GetPostService';

export default function Post({ post, posts }: PostProps) {
  const router = useRouter()

  if (router.isFallback) {
    return <p> Loading... </p>
  }

  return (
    <>
      <SEO
        title={post.seo_title}
        description={post.seo_description}
        slug={post.slug}
        image={post.banner.src}
        keywords={post.seo_keywords}
        hasADS={true}
      />

      <NavigationControl previousPath="/posts/" />

      <main className={styles.container}>

        <article className={styles.post}>
          <img className={styles.image} src={post.banner.src} />

          <div className={styles.text}>
            <div className={styles.header}>
              <h1> {post.title} </h1>
              <h2> {post.subtitle } </h2>
              <time> {post.updatedAt} </time>
            </div>
            <div
              className={styles.static_content}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>

        <Recents posts={posts} />
      </main>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1739197497968733"
        data-ad-slot="6382729267"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {

  const httpService = AxiosHttpClient.getInstance()
  const notification = new Notification()
  const getPostService = new GetPostService(httpService, notification)
  const res = await getPostService.execute()
  const filteredPosts = postsFilterByStatus(res.posts, 'prod')

  const paths = filteredPosts.length > 0 ? filteredPosts.map(post => `/post/${post.slug}`) : []

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const {slug} = params

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
  const posts = filteredPosts.map(content => adapter(content as PostModel))
  const post = posts.filter(post => post.slug == slug)[0]

  return {
    props: { posts, post },
    revalidate: 60 * 60 * 24
  }
}
