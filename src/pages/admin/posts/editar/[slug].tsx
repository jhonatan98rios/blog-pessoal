import React, { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic';
import { parseCookies } from 'nookies'

import { SEO, NavigationControl, Select } from 'components/Shared';
import { adapter } from 'services/adapter';

import styles from './styles.module.scss'
import { PostProps } from 'types'
import { AxiosHttpClient } from 'infra/http/AxiosHttpClient';
import { categoryParse } from 'services/utils';
import Notification from 'infra/errors/Notification';
import { UpdatePostService } from 'services/http/Admin/Posts/UpdatePostService';
import { GetPostService } from 'services/http/Admin/Posts/GetPostService';

const Quilljs = dynamic(
  () => import('components/Admin/Posts/Quilljs').then((res) => res.Quilljs),
  { ssr: false }
)

export default function Post({ post }: PostProps) {
  const router = useRouter()

  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [categories, setCategories] = useState('')
  const [seo_title, setSeoTitle] = useState('')
  const [seo_description, setSeoDescription] = useState('')
  const [seo_keywords, setSeoKeys] = useState('')
  const [language, setLanguage] = useState('BR')
  const [status, setStatus] = useState('dev')

  const [content, setContent] = useState('')
  const [banner, setBanner] = useState<any>({})


  async function bannerHandleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const client = AxiosHttpClient.getInstance()
    const image = await client.fileUpload('/post/image/', event.target.files[0])
    setBanner(image)
  }

  async function formHandle(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault()

    const categs = categoryParse(categories)

    const httpService = AxiosHttpClient.getInstance()
    const notification = new Notification()
    const updatePostService = new UpdatePostService(httpService, notification)
    const res = await updatePostService.execute(post.slug, {
      title, subtitle, banner, content, language, status,
      seo_title, seo_description, seo_keywords,
      categories: categs,
    })

    if (res) {
      router.push('/admin/posts')
    }
  }

  if (router.isFallback) {
    return (<p> Loading... </p>)
  }

  useEffect(() => {

    setTitle(post.title)
    setSubtitle(post.subtitle)
    setCategories(post.categories.map(categ => categ.label).join(', '))
    setSeoTitle(post.seo_title)
    setSeoDescription(post.seo_description)
    setSeoKeys(post.seo_keywords)
    setContent(post.content)
    setBanner(post.banner)
    setLanguage(post.language)
    setStatus(post.status)

  }, [])

  return (
    <>
      <SEO
        title="Painel administrativo | Editar Post"
        description="Acesso aos recursos administrativos"
        keywords="posts, painel administrativo, editar post"
        hasADS={false}
      />

      <NavigationControl previousPath="/admin/posts/" />

      <main className={styles.main}>
        <h1 className={styles.title}> Edição do post </h1>
        <form className={styles.form}>

          <label className={styles.label} htmlFor="title" >
            Titulo:
            <input
              className={styles.input}
              type="text"
              name='title'
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
          </label>

          <label className={styles.label} htmlFor="subtitle">
            Subtitulo:
            <input
              className={styles.input}
              type="text"
              name='subtitle'
              value={subtitle}
              onChange={event => setSubtitle(event.target.value)}
            />
          </label>

          <label className={styles.label} htmlFor="categories">
            Categorias:
            <input
              className={styles.input}
              type="text"
              name='categories'
              value={categories}
              placeholder="Ex: Tecnologia, Programação"
              onChange={event => setCategories(event.target.value)}
            />
          </label>

          <label className={styles.label} htmlFor="banner">
            Banner:
            <input
              className={styles.input}
              type="file"
              name='banner'
              accept="images/*"
              onChange={bannerHandleChange}
            />
          </label>

          { banner.src && <img src={banner.src} alt="" height={100} width={100} /> }

          <label className={styles.label} htmlFor="seo_title">
            Titulo SEO:
            <input
              className={styles.input}
              type="text"
              name='seo_title'
              value={seo_title}
              onChange={event => setSeoTitle(event.target.value)}
            />
          </label>

          <label className={styles.label} htmlFor="seo_description">
            Descrição SEO:
            <input
              className={styles.input}
              type="text"
              name='seo_description'
              value={seo_description}
              onChange={event => setSeoDescription(event.target.value)}
            />
          </label>

          <label className={styles.label} htmlFor="seo_keywords">
            Palavras chaves SEO:
            <input
              className={styles.input}
              type="text"
              name='seo_keywords'
              value={seo_keywords}
              onChange={event => setSeoKeys(event.target.value)}
            />
          </label>

          <Select
            label="Idioma"
            value={language}
            callback={setLanguage}
            options={[
              { value: 'BR', text: 'BR' },
              { value: 'EN', text: 'EN' }
            ]}
          />

          <Select
            label="Status"
            value={status}
            callback={setStatus}
            options={[
              { value: 'dev', text: 'DEV' },
              { value: 'prod', text: 'PROD' }
            ]}
          />

          <label className={styles.content_label}>
            Conteúdo
            <Quilljs setContent={setContent} initialContent={post.content} />
          </label>

          <button className={styles.button} onClick={formHandle}> Enviar </button>

        </form>

      </main>
    </>
  );
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

  const {slug} = ctx.params

  const httpService = AxiosHttpClient.getInstance()
  const notification = new Notification()
  const getPostService = new GetPostService(httpService, notification)
  const res = await getPostService.execute()

  const posts = res.posts.length > 0 ? res.posts.map(content => adapter(content)) : []
  const post = posts.filter(post => post.slug == slug)[0]

  return {
    props: { post }
  }
}
