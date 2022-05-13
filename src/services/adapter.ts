import { DjangoPost, ExpandedPost } from "../types";
import { sizes } from "./constants";
import { calcTextSize, getExcerpt } from "./utils";



export function adapter(post: DjangoPost): Partial<ExpandedPost> {

  return {
    seo_title: post.seo_title,
    seo_description: post.seo_description,
    seo_keywords: post.seo_keywords,
    slug: post.slug,
    title: post.title,
    banner: {
      src: post.banner_src,
      alt: post.banner_alt,
      title: post.banner_title,
    },
    updatedAt: post.updatedAt,
    content: post.content,
    excerpt: getExcerpt(post.content),
    categories: post.categories.split(','),
    style: sizes[
      calcTextSize(post.title)
    ]
  }
}
