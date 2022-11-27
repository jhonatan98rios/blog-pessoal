import Link from 'next/link';
import React from 'react';
import { ExpandedPost } from '../../../types';

import styles from './styles.module.scss';

interface RecentsProps {
  posts: Array<ExpandedPost>
}

export function Recents({ posts }: RecentsProps) {

  return (
    <aside className={styles.container}>
      <h3 className={styles.header}>
        Recentes
      </h3>
      <nav >
        <ul className={styles.recents}>
          { posts.slice(0, 3).map((post, index) => 
            <li className={styles.post} key={index}> 
              <Link href={post.slug}>
                <h6 className={styles.title}>{ post.title }</h6>
                <time>{ post.updatedAt }</time>
                <p 
                  className={styles.excerpt} 
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt
                  }} 
                />
              </Link>
            </li> 
          )}
        </ul>
      </nav>
    </aside>
  );
}
