import { GetStaticProps } from "next";
/* import Link from "next/link"; */
import SEO from "../../components/SEO";

import { sizes } from '../../services/constants'

import styles from './posts.module.scss'
import { FlexiblePost } from "../../components/FlexiblePost";
/* import { Carousel } from '../../components/Carousel' */
import useDeviceDetect from "../../hooks/useDevice";
import { Categories } from "../../components/Categories";

import { mock_posts } from '../../mockdata/posts'

interface IImage {
  src: string
  alt: string
  title: string
}

interface IPost {
  slug: string;
  title: string;
  image: IImage[]
  updateAt: string;
  style: object
}

interface IPostsProps {
  posts: IPost[]
}

export default function Posts({ posts }: IPostsProps) {

  const { isMobile } = useDeviceDetect()

  return (
    <>
      <SEO title="Posts" />
      
      <main>
      { isMobile && <Categories /> }

        {/* <Carousel /> */}

        <section className={styles.container}>
          { !isMobile && <Categories /> }

          <div className={styles.posts}>
            { posts.map((post, index) => (
              <FlexiblePost post={post} key={index} 
                customStyle={{ ...post.style }}
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

  let posts = mock_posts.map(post => {
    let random = Math.floor(Math.random() * 5)
    let options = Object.keys(sizes)
    let selected = options[random]
    let style = sizes[selected]
    style.backgroundImage = `url(${post.image[0].src})`

    return {
      ...post,
      style
    }
  })


  return {
    props: {
      posts,
    },
    revalidate: 60 * 60 * 12
  }
}