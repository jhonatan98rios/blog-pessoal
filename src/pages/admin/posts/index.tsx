import Link from 'next/link'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { useContext, useEffect, useState } from 'react'

import StoreContext from 'context/search/store'
import PostThumb from 'components/Admin/Posts/PostThumb'
import { getAllPosts } from 'services/http/Admin/Posts/client'
import { SEO, NavigationControl } from 'components/Shared'

import { getDeduplicatedCategories, postsFilterBySearch } from 'services/utils'
import { adapter } from 'services/adapter'

import { IPost } from 'types'
import styles from './style.module.scss'

export default function AdminsPosts({ posts }) {

  const [ filteredPosts, setFilteredPosts ] = useState<IPost[]>([])
  const { state } = useContext(StoreContext)

  useEffect(() => {
    setFilteredPosts(
      postsFilterBySearch(posts, state.search)
    )

  }, [state.search])

  return (
    <>
      <SEO
        title="Painel administrativo | Posts"
        description="Acesso aos recursos administrativos"
        keywords="posts, painel administrativo"
        hasADS={false}
      />

      <main>
        <NavigationControl previousPath="/admin/" />

        <section className={styles.main}>
          <div className={styles.header}>
            <h1> Admin Posts </h1>

            <Link href="/admin/posts/criar">
              <button className={styles.add}> Criar </button>
            </Link>
          </div>

          <section>
            {filteredPosts?.map((post, index) => {
              return (
                <PostThumb content={post} key={index} />
              )
            })}
          </section>
        </section>
      </ main>
    </>
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

  const data = await getAllPosts(ctx)

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
