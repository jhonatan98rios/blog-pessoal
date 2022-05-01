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
  image: IImage
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
