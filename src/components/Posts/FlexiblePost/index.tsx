import Link from 'next/link';
import styles from './styles.module.scss';

import { PostCardProps } from '../../../types'
import { useContext } from 'react';
import { AuthContext } from '../../../context/auth/store';

export function FlexiblePost({ post, customStyle }: PostCardProps) {

  const ctx = useContext(AuthContext)

  return (
    <Link 
      href={`/post/${post.slug}`} 
      className={styles.card} 
      style={{
        ...customStyle,
        backgroundImage: `url(${post.banner.src})`
    }}>
      <article>
        {
          ctx.isAuthenticated &&
          <Link href={`/admin/editar/${post.slug}`} target="_blank">
            <img src="/admin/edit.svg" alt="" className={styles.edit} />
          </Link>
        }

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
