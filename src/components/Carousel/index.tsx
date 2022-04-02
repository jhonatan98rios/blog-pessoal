import styles from './styles.module.scss';

import { customStyles } from '../../services/constants'
import { DragInScroll } from '../../services/drag-to-scroll'
import { useEffect, useRef } from 'react';

function Card({ cs }){
  return (
    <article className={styles.card} style={{...cs}} />
  )
}


export function Carousel() {

  const slides = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const dis = new DragInScroll(slides.current)
    slides.current.addEventListener('mousedown', dis.mouseDownHandler.bind(dis))
  })

  return (
    <section className={styles.slider}>

      <div className={styles.slides} ref={slides}>
        {customStyles.map((card, index) => (
          <Card cs={card} key={index} />
        ))}
      </div>
      
    </section>
  );
}
