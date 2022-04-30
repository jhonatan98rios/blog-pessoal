import Link from 'next/link';
import React from 'react';
import styles from './styles.module.scss';

import { mock_posts } from '../../../mockdata/posts'


function getExcerpt(html) {

  const cleanText = html.replace(/<\/?[^>]+(>|$)/g, "");
  const excerpt = cleanText.substring(0, 150) + '...'

  return excerpt
}

export function Recents() {
  return (
    <aside className={styles.container}>
      <h3 className={styles.header}>
        Recentes
      </h3>
      <nav className={styles.recents}>
        { mock_posts.slice(0, 3).map((post, index) => 
          <li className={styles.post} key={index}> 
            <Link href={post.slug}>
              <a>
                <h6 className={styles.title}>{ post.title }</h6>
                <time>{ post.updateAt }</time>
                <p className={styles.excerpt}>{ getExcerpt(post.content) }</p>
              </a>
            </Link>
          </li> 
        )}
      </nav>
    </aside>
  );
}
