import Link from 'next/link';
import React, { useEffect } from 'react';
import { ExpandedPost } from '../../../types';

import styles from './styles.module.scss';

interface RecentsProps {
  posts: Array<ExpandedPost>
}

export function Recents({ posts }: RecentsProps) {

  useEffect(() => {
    console.log('================================')
    console.log(posts)
    console.log('================================')
  }, [])

  return (
    <aside className={styles.container}>
      <h3 className={styles.header}>
        Recentes
      </h3>
      <nav className={styles.recents}>
        { posts.slice(0, 3).map((post, index) => 
          <li className={styles.post} key={index}> 
            <Link href={post.slug}>
              <a>
                <h6 className={styles.title}>{ post.title }</h6>
                <time>{ post.updatedAt }</time>
                <p className={styles.excerpt}>{ post.excerpt }</p>
              </a>
            </Link>
          </li> 
        )}
      </nav>
    </aside>
  );
}
