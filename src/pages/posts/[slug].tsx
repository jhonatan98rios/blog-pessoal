import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next';
import { useRouter } from 'next/router'
import SEO from '../../components/SEO';
import styles from './post.module.scss'

import { mock_posts } from '../../mockdata/posts'


interface IImage {
  src: string
  alt: string
  title: string
}

interface PostProps {
  post: {
    slug: string
    title: string
    content: string
    image: IImage[]
    updateAt: string
  }
}


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

          <img className={styles.image} src={post.image[0].src} alt={post.image[0].alt} />

          <div className={styles.text}>
            <div className={styles.header}>
              <h1> {post.title} </h1>
              <time> {post.updateAt} </time>
            </div>
            <div 
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: post.content }} 
            /> 
          </div>

        </article>
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
    props: {
      post
    },
    revalidate: 60 * 60 * 12
  }
}
