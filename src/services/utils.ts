import { CategoryModel } from 'models/Category';
import { PostModel } from 'models/Post';
import { IPost } from 'types'

export function getCategory() {
  return window.location.hash.substr(1);
}

export function baseImage(src, alt, title) {
  return { src, alt, title }
}

export function genImage({ src, alt, title }) {
  return `<img class="static_content-image" src="${src}" alt="${alt}" title="${title}">`
}

export function genLink(href, label=null, target="_blank") {
  const rel = target == '_blank' ? 'rel="noopener noreferrer"' : null
  return `<a href="${href}" target="${target}" ${rel}> ${label ? label : href} </a>`
}

export function postsFilterBySearch(posts: Array<IPost>, search?: string | string[]) {
  return search
    ? posts.filter(post => {
      return [...post.categories, post.title]
        .join(' ')
        .toLowerCase()
        .includes(
          search
            .toString()
            .toLowerCase()
        )
    })
    : posts
}

export function postsFilterByLanguage(posts: Array<PostModel | IPost>, language?: string) {
  return language
    ? posts.filter(post => post.language == language)
    : posts
}

export function postsFilterByStatus(posts: Array<PostModel | IPost>, status?: string) {
  return status
    ? posts.filter(post => post.status == status)
    : posts
}


export function calcTextSize(text: string) {
  const text_size = text.length
  return (
    text_size > 100 ? 'xbig' :
    text_size > 75 ? 'big' :
    text_size > 50 ? 'medium' :
    text_size > 25 ? 'small' :
    'xsmall'
  )
}

export function getExcerpt(html: string) {

  const short = html.substring(0, 160) + '...'
  const excerpt = short.replace(/<\/?[^>]+(>|$)/g, "");

  return excerpt
}

export function getDeduplicatedCategories(posts: Array<PostModel | IPost>) {

  const categories = posts.map(post => {
    return post.categories.map(categorie => {
      delete categorie['_id']
      return JSON.stringify(categorie)
    })
  })

  const flatCategories = categories.flat()

  const deduplicated = [...new Set(flatCategories)].map(categorie => {
    return JSON.parse(categorie)
  })

  return deduplicated
}

export function categoryParse(categories: string) {
  return categories.split(',').map(categ => ({
    label: categ.trim(),
    path: categ.trim()
      .toLocaleLowerCase()
      .replace(/ç/g, 'c')
      .replace(/ã/g, 'a')
      .replace(/[^a-z0-9 ]/g, '')
  }))
}
