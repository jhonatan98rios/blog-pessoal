import Link from 'next/link';
import React from 'react';
import styles from './styles.module.scss';

import { mock_posts } from '../../mockdata/posts'

const categories = [
  {
    slug: 'comecando-com-back-end',
    title: 'Começando com back-end',
    updatedAt: '21 Mar 2022',
    excerpt: 'Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga.Posuere libero varius...'
  },
  {
    slug: 'como-criar-testes-com-python',
    title: 'Como criar testes com Python',
    updatedAt: '22 Mar 2022',
    excerpt: 'Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga.Posuere libero varius...'
  },
  {
    slug: 'comecando-com-back-end',
    title: 'Começando com back-end',
    updatedAt: '21 Mar 2022',
    excerpt: 'Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga.Posuere libero varius...'
  },
  {
    slug: 'como-criar-testes-com-python',
    title: 'Como criar testes com Python',
    updatedAt: '22 Mar 2022',
    excerpt: 'Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga.Posuere libero varius...'
  },
]

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
        { mock_posts.map((post, index) => 
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
