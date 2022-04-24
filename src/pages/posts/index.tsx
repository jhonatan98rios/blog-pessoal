import { GetStaticProps } from "next";
/* import Link from "next/link"; */
import SEO from "../../components/SEO";
import Prismic from '@prismicio/client'
import { RichText } from "prismic-dom";

import { getPrismicClient } from '../../services/prismic'
import { sizes, customStyles } from '../../services/constants'

import styles from './posts.module.scss'
import { FlexiblePost } from "../../components/FlexiblePost";
import { AsideMenu } from '../../components/AsideMenu'
/* import { Carousel } from '../../components/Carousel' */
import useDeviceDetect from "../../hooks/useDevice";
import { Categories } from "../../components/Categories";


interface Post {
  slug: string;
  title: string;
  excerpt: string;
  updateAt: string;
}

interface PostsProps {
  posts: Post[]
}

interface PrismicResponse {
  title: string
  content: {
    find: Function
  }
}


export default function Posts({ posts }: PostsProps) {

  const { isMobile } = useDeviceDetect()

  return (
    <>
      <SEO title="Posts" />
      
      <main>
      { isMobile && <Categories /> }

        {/* <Carousel /> */}

        <section className={styles.container}>
          { !isMobile && <AsideMenu /> }

          <div className={styles.posts}>
            { posts.map((post, index) => (
              <FlexiblePost post={post} key={index} 
                customStyle={{ ...customStyles[index], ...sizes[customStyles[index].size]}}
              />
            ))}
          </div>

          { !isMobile && <span className={styles.fake_col}></span>  }
        </section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {

  const prismic = getPrismicClient()
  const response = await prismic.query<PrismicResponse>([
    Prismic.predicates.at('document.type', 'post')
  ], {
    fetch: ['post.title', 'post.content']
  })

  const posts = response.results.map((post) => {
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
      posts: [...posts, ...posts, ...posts, ...posts, ...posts, ...posts]
    },
    revalidate: 60 * 60 * 12
  }
}