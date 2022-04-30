import { GetStaticPaths, GetStaticProps } from "next";
import SEO from "../../components/SEO";
import { FlexiblePost } from "../../components/Posts/FlexiblePost";
import useDeviceDetect from "../../hooks/useDevice";
import { Categories } from "../../components/Posts/Categories";
/* import { Carousel } from '../../components/Carousel' */

import styles from './styles.module.scss'
import { mock_posts } from '../../mockdata/posts'
import { sizes } from '../../services/constants'
import { useContext, useEffect, useState } from "react";
import StoreContext from "../../context/store";
import { postsFilter } from "../../services/utils";
import { useRouter } from "next/router";

interface IImage {
  src: string
  alt: string
  title: string
}

interface IPost {
  slug: string
  title: string
  image: IImage
  updateAt: string
  categories: string[]
  style: object
}

interface IPostsProps {
  posts: IPost[]
}

export default function FilteredPosts({ posts }: IPostsProps) {

  const router = useRouter()
  const { isMobile } = useDeviceDetect()
  const { state, setState } = useContext(StoreContext)
  const [ filteredPosts, setFilteredPosts ] = useState<IPost[]>([])

  useEffect(() => {
    setState({ ...state, search: '' })
  }, [])

  useEffect(() => {
    setFilteredPosts(
      postsFilter(state.search, posts)
    )

  }, [state.search, router.asPath])

  return (
    <>
      <SEO title="Posts" />
      
      <main>
      { isMobile && 
        <Categories /> 
      }

        <section className={styles.container}>
          { !isMobile &&
           <Categories /> 
          }

          <div className={styles.posts}>
            { filteredPosts && 
              filteredPosts.map((post, index) => (
                <FlexiblePost post={post} key={index} 
                  customStyle={{ ...post.style }}
                />
              ))
            }
          </div>

          { !isMobile && 
            <span className={styles.fake_col}></span>  
          }
        </section>
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

  const filtered_posts = mock_posts.filter(post => post.categories.includes(`${params.slug}`) )

  const posts = filtered_posts.map(post => {

    const text_size = post.title.length
    const selected = text_size > 100 ? 'xbig' :
      text_size > 75 ? 'big' :
      text_size > 50 ? 'medium' :
      text_size > 25 ? 'small' :
      'xsmall'

    const style = sizes[selected]

    return { ...post, style }
  })

  return {
    props: {
      posts,
    },
    revalidate: 60 * 60 * 120
  }
}

