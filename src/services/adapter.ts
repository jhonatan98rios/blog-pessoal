import { DjangoPost, ExpandedPost } from "../types";
import { sizes } from "./constants";
import { calcTextSize, getExcerpt } from "./utils";


import { PostModel } from "../models/Post";
import { ImageModel } from "../models/Image";

function contentCompositor(content: string, images: Array<ImageModel>) {

  let composedContent = content

  images.forEach((image, index) => {

    const img = `
      <img 
        src="${image.destination + image.filename}"
      >
    `

    const marker = `{% image ${ index } %}`

    composedContent = composedContent.replace(marker, `${img}`)
  })

  return composedContent
}


export function adapter(post: PostModel): Partial<ExpandedPost> {

  const src = post.images.length > 0 
    ? post.images[0].destination + post.images[0].filename 
    : ''

  return {
    seo_title: post.seo_title,
    seo_description: post.seo_description,
    seo_keywords: post.seo_keywords,
    slug: post.slug,
    title: post.title,
    banner: { src },
    updatedAt: post.updatedAt,
    content: contentCompositor(post.content, post.images),
    excerpt: getExcerpt(post.content),
    categories: post.categories,
    style: sizes[
      calcTextSize(post.title)
    ]
  }
}


