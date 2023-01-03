import React, { useEffect, useState } from 'react';
import SEO from '../../components/Shared/SEO';
import { postData } from '../../services/client';
import { fileUpload } from '../../services/fileUpload';
import styles from './style.module.scss';


export default function Create() {

  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [categories, setCategories] = useState('')
  const [seo_title, setSeoTitle] = useState('')
  const [seo_description, setSeoDescription] = useState('')
  const [seo_keys, setSeoKeys] = useState('')

  const [banner, setBanner] = useState<any>({})

  async function bannerHandleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const image = await fileUpload(event.target.files[0])

    setBanner(image)
  }

  async function formHandle(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {

    event.preventDefault()

    let categs = categories.split(',').map(categ => {
      return {
        label: categ.trim(),
        path: categ.toLocaleLowerCase()
      }
    })

    const body = {
      title, subtitle, seo_title, seo_description, seo_keys, banner,
      content: "<html><body>#images[0]<p>Batata</p>#images[1]</body></html>",
      categories: categs
    }

    const errors = Object.keys(body).filter(prop => body[prop].length == 0)

    console.log('errors', errors)

    postData(body)
    
    if (!errors.length) {

    } else {
      console.log('Invalid props', errors)
    }
  }

  return (
    <>
      <SEO
        title="Como ser um desenvolvedor?"
        description="Conteúdos sobre programação, design e muito mais!"
        image="https://jhonatan-teixeira-rios-blog.herokuapp.com/autor/avatar.png"
        excludeTitleSuffix
      />

      <main className={styles.main}>
        <h1 className={styles.title}> Criação de um novo Post </h1>
        <form className={styles.form}>

          <label className={styles.label} htmlFor="title" >
            Titulo:
            <input className={styles.input} type="text" name='title' value={title} onChange={event => setTitle(event.target.value)} />
          </label>

          <label className={styles.label} htmlFor="subtitle">
            Subtitulo:
            <input className={styles.input} type="text" name='subtitle' value={subtitle} onChange={event => setSubtitle(event.target.value)} />
          </label>

          <label className={styles.label} htmlFor="categories">
            Categorias:
            <input className={styles.input} type="text" name='categories' value={categories} onChange={event => setCategories(event.target.value)} />
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
            <input className={styles.input} type="text" name='seo_title' value={seo_title} onChange={event => setSeoTitle(event.target.value)} />
          </label>

          <label className={styles.label} htmlFor="seo_description">
            Descrição SEO:
            <input className={styles.input} type="text" name='seo_description' value={seo_description} onChange={event => setSeoDescription(event.target.value)} />
          </label>

          <label className={styles.label} htmlFor="seo_keywords">
            Palavras chaves SEO:
            <input className={styles.input} type="text" name='seo_keywords' value={seo_keys} onChange={event => setSeoKeys(event.target.value)} />
          </label>

          <button className={styles.button} onClick={formHandle}> Enviar </button>

        </form>
      </main>
    </>
  );
}