import { ExpandedPost } from "../types";
import { sizes } from "./constants";
import { calcTextSize, getExcerpt } from "./utils";
import { PostModel } from "../models/Post";


export function adapter(post: PostModel): Partial<ExpandedPost> {

  return {
    seo_title: post.seo_title,
    seo_description: post.seo_description,
    seo_keywords: post.seo_keywords,
    slug: post.slug,
    title: post.title,
    subtitle: post.subtitle,
    banner: post.banner,
    updatedAt: new Date(post.updatedAt).toLocaleDateString(),
    content: post.content,
    excerpt: getExcerpt(post.content),
    categories: post.categories,
    style: sizes[
      calcTextSize(post.title)
    ],
    status: post.status,
    language: post.language,
  }
}


