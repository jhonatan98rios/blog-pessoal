import { sizes } from "./constants";
import { calcTextSize } from "./utils";

export interface DjangoPost {
  slug: string
  title: string
  banner: string
  content: string
  categories: string
}

export function adapter(post: DjangoPost) {

  const selected = calcTextSize(post.title)

  return {
    slug: post.slug,
    title: post.title,
    banner: {
      src: post.banner,
      alt: '',
      title: '',
    },
    content: post.content,
    categories: post.categories.split(','),
    style: sizes[selected]
  }
}
