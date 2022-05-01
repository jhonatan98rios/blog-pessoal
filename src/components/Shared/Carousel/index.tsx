import styles from './styles.module.scss';

import { DragInScroll } from '../../../services/drag-to-scroll'
import { useEffect, useRef } from 'react';

const cards = []

function Card({ cs }){
  return (
    <article className={styles.card} style={{...cs}}>
      <span className="likes" />

      <h3 className={styles.title}> Getting Started </h3>
      <time>March 25, 2022</time>

      <div className={styles.categories}>
        <span className={styles.category}>
          Programação
        </span>
      </div>
    </article>
  )
}


export function Carousel() {

  const slides = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const dis = new DragInScroll(slides.current)
    //slides.current.addEventListener('mousedown', dis.mouseDownHandler.bind(dis))
  })

  return (
    <section className={styles.slider}>

      <div className={styles.slides} ref={slides}>
        {cards.map((card, index) => (
          <Card cs={card} key={index} />
        ))}
      </div>
      
    </section>
  );
}
