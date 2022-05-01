import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next';
import { useRouter } from 'next/router'
import SEO from '../../components/SEO';
import styles from './styles.module.scss'

import { mock_posts } from '../../mockdata/posts'
import React from 'react';
import { Recents } from '../../components/Post/Recents';

import { PostProps } from '../../types'

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
          <img className={styles.image} src={post.image.src} alt={post.image.alt} />

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
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const {slug} = params
  const post = mock_posts.filter(post => post.slug == slug)[0]
  
  return {
    props: { post },
    revalidate: 60 * 60 * 12
  }
}
