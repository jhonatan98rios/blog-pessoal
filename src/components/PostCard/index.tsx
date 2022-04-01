import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';

interface PostCardProps {
  post: Post
}

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  updateAt: string;
}

export function PostCard({ post }: PostCardProps) {

  const { asPath } = useRouter();

  return (
    <article className={styles.card}>
      <div className={styles.container}>
        <div className="is-flex is-justify-content-space-between">
          <h3 className={styles.title}> {post.title} </h3>
          <time>{post.updateAt} </time>
        </div>
        <p className={styles.excerpt}> {post.excerpt} </p>
      </div>
      <div className={styles.categories}>
        <span className={styles.category}>
          Programação
        </span>
      </div>
    </article>
  );
}
