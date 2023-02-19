import { LinkProps } from "next/link";
import { CSSProperties, ReactElement } from "react";

export interface IImage {
  src: string
}

export interface ICategory {
  label: string
  path: string
}

export interface IPost {
  slug: string
  title: string
  banner: IImage
  content: string
  updateAt: string
  language: string
  status: string
  categories: Array<ICategory>
  style: CSSProperties
}

export interface PostCardProps {
  post: IPost
  customStyle: CSSProperties
}

export interface PostProps {
  post: Partial<ExpandedPost>
  posts: ExpandedPost[]
}

export interface IPostsProps {
  posts: IPost[]
  categories: ICategory[]
}

export interface SEOProps {
  title: string
  description?: string
  slug?: string
  keywords?: string
  image?: string
  excludeTitleSuffix?: boolean
  indexPage?: boolean
  hasADS?: boolean
}

export interface ActiveLinkProps extends LinkProps {
  children: ReactElement | String ;
  activeClassName: string;
}

export interface DjangoPost {
  id: number
  slug: string
  title: string
  images: Array<IImage>
  updatedAt: string
  categories: Array<ICategory>
  content: string
  seo_title: string
  seo_description: string
  seo_keywords: string
}

export interface ExpandedPost {
  seo_title: string
  seo_description: string
  seo_keywords: string
  slug: string
  title: string
  subtitle: string
  banner: {
    src: string
  }
  updatedAt: string
  content: string
  excerpt: string,
  categories: Array<ICategory>
  style: unknown
  language: string
  status: string
}
