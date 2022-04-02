import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';

interface PostCardProps {
  post: Post
  customStyle: object
}

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  updateAt: string;
}


export function FlexiblePost({ post, customStyle }: PostCardProps) {

  const { asPath } = useRouter();

  return (
    <article className={styles.card} style={{...customStyle}}>

      <span className="likes" />

      <h3 className={styles.title}> {post.title} </h3>
      <time>{post.updateAt} </time>

      <div className={styles.categories}>
        <span className={styles.category}>
          Programação
        </span>
      </div>

    </article>
  );
}
