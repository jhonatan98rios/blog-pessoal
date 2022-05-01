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

export function postsFilter(search: string | string[], posts: Array<IPost>) {
  if (!search) return posts
    
  const filteredPosts = posts.filter(post => {    
    return [...post.categories, post.title]
      .join(' ')
      .toLowerCase()
      .includes(
        search
          .toString()
          .toLowerCase()
      )
  })
  return filteredPosts
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