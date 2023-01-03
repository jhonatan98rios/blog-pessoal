import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next';
import { useRouter } from 'next/router'
import SEO from '../../components/Shared/SEO';
import styles from './styles.module.scss'

import React from 'react';
import { Recents } from '../../components/Post/Recents';

import { PostProps } from '../../types'
import { getAllPosts } from '../../services/client';
import { adapter } from '../../services/adapter';
import Head from 'next/head';

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

  const data = await getAllPosts()
  const paths = data.posts.length > 0 ? data.posts.map(post => `/post/${post.slug}`) : []
  
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const {slug} = params

  const data = await getAllPosts()
  const posts = data.posts.length > 0 ? data.posts.map(content => adapter(content)) : []
  const post = posts.filter(post => post.slug == slug)[0]
  
  return {
    props: { posts, post },
    revalidate: 60 * 60 * 12
  }
}
