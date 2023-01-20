import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import PostThumb from '../../../components/Admin/Posts/PostThumb';
import { adapter } from '../../../services/adapter';
import { getAllPosts } from '../../../services/http/Admin/Posts/client';
import { getDeduplicatedCategories } from '../../../services/utils';
import styles from './style.module.scss';

export default function AdminsPosts({ posts }) {

  return (
    <main className={styles.main}>
      <h1> Admin Posts </h1>

      <section>
        {posts?.map((post, index) => {
          return (
            <PostThumb content={post} key={index} />
          )
        })}
      </section>

    </ main>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { ['nextauth.token']: token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }

  const data = await getAllPosts()

  if (!data || data.posts.length == 0) {
    return {
      props: {
        posts: [],
        categories: []
      }
    }
  }

  const categories = getDeduplicatedCategories(data.posts)
  const posts = data.posts.map(content => adapter(content))

  return {
    props: {
      posts,
      categories
    }
  }
}
