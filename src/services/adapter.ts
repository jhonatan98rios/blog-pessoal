export interface DjangoPost {
  slug: string
  title: string
  banner: string
  content: string
  categories: string
}

export function adapter(post: DjangoPost) {

  return {
    ...post,
    banner: {src: post.banner, alt:"", title: ""},
    categories: post.categories.split(',')
  }
}