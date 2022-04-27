import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';

interface IImage {
  src: string,
  alt: string
  title: string
}

interface IPost {
  slug: string;
  title: string;
  image: IImage
  updateAt: string;
}

interface PostCardProps {
  post: IPost
  customStyle: object
}


export function FlexiblePost({ post, customStyle }: PostCardProps) {

  const { asPath } = useRouter();

  return (
    <Link href={`/posts/${post.slug}`}>
      <a 
        className={styles.card} 
        style={{
          ...customStyle,
          backgroundImage: `url(${post.image.src})`
        }}

      >
        <article>
          <span className="likes" />

          <h3 className={styles.title}> {post.title} </h3>
          <time>{post.updateAt} </time>

          <div className={styles.categories}>
            <span className={styles.category}>
              Programação
            </span>
          </div>
        </article>
      </a>
    </Link>
  );
}
