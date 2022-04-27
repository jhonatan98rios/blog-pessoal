import styles from './styles.module.scss'
import TypeWriter from '../../../controllers/TypeWriter'
//import Particles from '../../../controllers/Particles'
import Globe from '../../../components/Home/Globe'
import { useEffect } from 'react';

export default function Hero({content}) {

  const particlesEl = React.createRef()
  const typeWriterEl = React.createRef()
  
  
  useEffect(()=>{

    /* const particles = new Particles(particlesEl.current, window.innerHeight, window.innerWidth)
    particles.startParticles() */

    const typeWriter = new TypeWriter()
    typeWriter.startWriter(typeWriterEl.current)

  }, [])


  return (
    <section className={styles.container} id={"home-hero"} ref={particlesEl}>
      <Globe />
      <h1 className={`${styles.title} title`} ref={typeWriterEl}> 
        {content}
      </h1>
    </section>
  )
}