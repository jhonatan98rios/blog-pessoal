import { GetStaticProps } from "next";
import Link from "next/link";
import SEO from "../../components/SEO";
import Prismic from '@prismicio/client'
import { RichText } from "prismic-dom";

import { getPrismicClient } from '../../services/prismic'

import styles from './posts.module.scss'
import { FlexiblePost } from "../../components/FlexiblePost";
import { AsideMenu } from '../../components/AsideMenu'
import { Recents } from "../../components/Recents";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  updateAt: string;
}

interface PostsProps {
  posts: Post[]
}

export default function Posts({ posts }: PostsProps) {
  return (
    <>
      <SEO title="Posts" />
      
      <main className={styles.container}>
        <AsideMenu />
        <div className={styles.posts}>
          { posts.map(post => <FlexiblePost post={post} key={post.slug} />) }
        </div>
        <Recents />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {

  const prismic = getPrismicClient()
  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post')
  ], {
    fetch: ['post.title', 'post.content']
  })

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
      updateAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })
  
  return {
    props: {
      posts: [...posts, ...posts]
    },
    revalidate: 60 * 60 * 12
  }
}