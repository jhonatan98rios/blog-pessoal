import { CategoryModel } from '../models/Category';
import { PostModel } from '../models/Post';
import { IPost } from '../types'

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

export function postsFilter(posts: Array<IPost>, search: string | string[]) {
  return !search
    ? posts
    : posts.filter(post => {
      return [...post.categories, post.title]
        .join(' ')
        .toLowerCase()
        .includes(
          search
            .toString()
            .toLowerCase()
        )
    })
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

export function getDeduplicatedCategories(posts: PostModel[]) {

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
