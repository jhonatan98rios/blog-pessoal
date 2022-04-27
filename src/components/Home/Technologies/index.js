import styles from './styles.module.scss'
import TechnologiesCarousel from '../../../components/Home/TechnologiesCarousel'

export default function Technologies({content}){

  return (
    <section className={styles.container} id={"home-technologies"} >
      <h2 className={`${styles.title} title`}> Linguagens e Tecnologias </h2>
      <TechnologiesCarousel content={content.frontend} title={"Front-End"} />
      <TechnologiesCarousel content={content.backend} title={"Back-End"} />
      <TechnologiesCarousel content={content.others} title={"Ferramentas adicionais"} />
    </section> 
  )
}
