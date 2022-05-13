import { LinkProps } from "next/link";
import { CSSProperties, ReactElement } from "react";

interface IImage {
  src: string
  alt: string
  title: string
}

export interface IPost {
  slug: string
  title: string
  banner: IImage
  content: string,
  updateAt: string
  categories: string[]
  style: CSSProperties
}

export interface PostCardProps {
  post: IPost
  customStyle: CSSProperties
}

export interface PostProps {
  post: Partial<IPost>
  posts: ExpandedPost[]
}

export interface IPostsProps {
  posts: IPost[]
}

export interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  excludeTitleSuffix?: boolean;
  indexPage?: boolean;
}

export interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}


export interface DjangoPost {
  id: number
  slug: string
  title: string
  banner_src: string
  banner_alt: string
  banner_title: string
  updatedAt: string
  categories: string
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
  banner: {
    src: string
    alt: string
    title: string
  }
  updatedAt: string
  content: string
  excerpt: string,
  categories: string[]
  style: unknown
}