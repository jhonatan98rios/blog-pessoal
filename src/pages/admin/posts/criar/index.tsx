import React, { useState } from 'react';
import { SEO, NavigationControl, Select } from 'components/Shared';
import styles from './style.module.scss';
import dynamic from 'next/dynamic'
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies'
import { useRouter } from 'next/router';
import { AxiosHttpClient } from 'infra/http/AxiosHttpClient';
import Notification from 'infra/errors/Notification';
import { CreatePostService } from 'services/http/Admin/Posts/CreatePostService';
import { categoryParse } from 'services/utils';

const Quilljs = dynamic(
  () => import('components/Admin/Posts/Quilljs').then((res) => res.Quilljs),
  { ssr: false }
)

export default function Create() {

  const router = useRouter()

  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [categories, setCategories] = useState('')
  const [seo_title, setSeoTitle] = useState('')
  const [seo_description, setSeoDescription] = useState('')
  const [seo_keywords, setSeoKeys] = useState('')
  const [language, setLanguage] = useState('BR')

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
    const createPostService = new CreatePostService(httpService, notification)

    const res = await createPostService.execute({
      title, subtitle, banner, content, language,
      seo_title, seo_description, seo_keywords,
      categories: categs,
    })

    if (res) {
      router.push('/admin/posts')
    }
  }

  return (
    <>
      <SEO
        title="Painel administrativo | Criar Post"
        description="Acesso aos recursos administrativos"
        keywords="posts, painel administrativo, criar post"
        hasADS={false}
      />

      <NavigationControl previousPath="/admin/posts" />

      <main className={styles.main}>

        <h1 className={styles.title}> Criação de um novo Post </h1>
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

          <label className={styles.content_label}>
            Conteúdo
            <Quilljs setContent={setContent} />
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

  return {
    props: {}
  }
}
