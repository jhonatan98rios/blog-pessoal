import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next';
import { useRouter } from 'next/router'
import SEO from '../../components/Shared/SEO';
import styles from './styles.module.scss'

import React from 'react';
import { Recents } from '../../components/Post/Recents';

import { PostProps } from '../../types'
import { getAllPosts } from '../../services/client';
import { adapter } from '../../services/adapter';

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
        banner={post.banner.src}
        keywords={post.seo_keywords}
      />
      
      <main className={styles.container}>
        <article className={styles.post}>
          <img className={styles.image} src={post.banner.src} alt={post.banner.alt} title={post.banner.title} />

          <div className={styles.text}>
            <div className={styles.header}>
              <h1> {post.title} </h1>
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
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {

  const allPosts = await getAllPosts()
  const paths = allPosts.map(post => `/post/${post.slug}`)

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const {slug} = params

  const data = await getAllPosts()
  const posts = data.map(post => adapter(post)) 
  const post = posts.filter(post => post.slug == slug)[0]
  
  return {
    props: { posts, post },
    revalidate: 60 * 60 * 12
  }
}
