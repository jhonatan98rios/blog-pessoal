import Link, { LinkProps } from 'next/link';
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
  categories: string[]
}

interface PostCardProps {
  post: IPost
  customStyle: object
}


export function FlexiblePost({ post, customStyle }: PostCardProps) {

  return (
    <Link href={`/post/${post.slug}`}>
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
            {
              post.categories.map(cat => (
                <span className={styles.category} key={cat}>
                  { cat }
                </span>
              ))
            }            
          </div>
        </article>
      </a>
    </Link>
  );
}
