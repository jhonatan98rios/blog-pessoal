import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next';
import { useRouter } from 'next/router'
import SEO from '../../components/Shared/SEO';
import styles from './styles.module.scss'

import React from 'react';
import { Recents } from '../../components/Post/Recents';

import { PostProps } from '../../types'
import { getAllPosts } from '../../services/client';
import { adapter } from '../../services/adapter';

export default function Post({ post }: PostProps) {
  const router = useRouter()

  if (router.isFallback) {
    return <p> Loading... </p>
  }

  return (
    <>
      <SEO title="Post" />
      
      <main className={styles.container}>
        <article className={styles.post}>
          <img className={styles.image} src={post.banner.src} alt={post.banner.alt} />

          <div className={styles.text}>
            <div className={styles.header}>
              <h1> {post.title} </h1>
              <time> {post.updateAt} </time>
            </div>
            <div 
              className={styles.static_content}
              dangerouslySetInnerHTML={{ __html: post.content }} 
            /> 
          </div>
        </article>

        <Recents />
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

  const allPosts = await getAllPosts()
  const filteredPost = allPosts.filter(post => post.slug == slug)[0]
  const post = adapter(filteredPost)
  
  return {
    props: { post },
    revalidate: 60 * 60 * 12
  }
}
