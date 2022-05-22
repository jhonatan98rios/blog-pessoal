import { DjangoPost, ExpandedPost } from "../types";
import { sizes } from "./constants";
import { calcTextSize, getExcerpt } from "./utils";

import { IImage } from '../types'

function contentCompositor(content: string, images: Array<IImage>) {

  let composedContent = content

  images.forEach((image, index) => {

    const img = `
      <img 
        src="https://res.cloudinary.com/jhonatan98rios/${image.src}" 
        alt="${image.alt}" title="${image.title}"
      >
    `

    const marker = `{% image ${ index } %}`

    composedContent = composedContent.replace(marker, `${img}`)
  })

  return composedContent
}


export function adapter(post: DjangoPost): Partial<ExpandedPost> {

  const { src, alt, title } = post.images[0]

  return {
    seo_title: post.seo_title,
    seo_description: post.seo_description,
    seo_keywords: post.seo_keywords,
    slug: post.slug,
    title: post.title,
    banner: {
      src: 'https://res.cloudinary.com/jhonatan98rios/' + src,
      alt: alt,
      title: title,
    },
    updatedAt: post.updatedAt,
    content: contentCompositor(post.content, post.images),
    excerpt: getExcerpt(post.content),
    categories: post.categories,
    style: sizes[
      calcTextSize(post.title)
    ]
  }
}
