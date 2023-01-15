import Link from 'next/link';
import styles from './styles.module.scss';

import { PostCardProps } from '../../../types'

export function FlexiblePost({ post, customStyle }: PostCardProps) {

  return (
    <Link 
      href={`/post/${post.slug}`} 
      className={styles.card} 
      style={{
        ...customStyle,
        backgroundImage: `url(${post.banner.src})`
    }}>
      <article>
        <span className="likes" />

        <h3 className={styles.title}> {post.title} </h3>
        {/* <time>{post.updateAt} </time> */}

        <div className={styles.categories}>
          {
            post.categories.map(cat => (
              <span className={styles.category} key={cat.label}>
                { cat.label }
              </span>
            ))
          }            
        </div>
      </article>
    </Link>
  );
}
