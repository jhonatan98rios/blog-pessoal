import styles from './styles.module.scss';

const categories = [
  {
    title: 'Começando com back-end',
    updatedAt: '21 Mar 2022',
    excerpt: 'Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga.Posuere libero varius...'
  }
]

export function Recents() {
  return (
    <aside className={styles.container}>
      <h3 className={styles.header}>
        Categorias
      </h3>
      <nav className={styles.recents}>
        { categories.map((category, index) => 
          <li className={styles.post} key={index}> 
            <h6 className={styles.title}>{ category.title }</h6>
            <time>{ category.updatedAt }</time>
            <p className={styles.excerpt}>{ category.excerpt }</p>
          </li> 
        )}
      </nav>
    </aside>
  );
}
