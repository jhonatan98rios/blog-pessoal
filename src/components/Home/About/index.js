import styles from './styles.module.scss'

export default function Hero({content}) {

  return (
    <section className={styles.container} id={"home-about"}>
      <div className={styles.about}>
        <div className={styles.avatar}>
          <img src='./avatar.png' />
        </div>
        <p className="paragraph">
          {content}
        </p>
      </div>
    </section>
  )
}
