import { useEffect, useRef } from 'react';
import styles from './styles.module.scss'

interface IAdBanner {
  id: string
}

export function AdBanner({ id }: IAdBanner) {

  const banner = useRef<HTMLAnchorElement>(null)

  function handleScroll() {

    if (this.scrollY > 750) {
      banner.current.style.position = 'fixed'
      banner.current.style.top = '100px'
    } else {
      banner.current.style.position = 'relative'
      banner.current.style.top = '0px'
    }
  }

  useEffect(() => {
    addEventListener('scroll', handleScroll)
    return () => {
      removeEventListener('scroll', handleScroll)
    }
  }, [])

  const content = {
    'A81212712O': { src: '/adbanners/A81212712O.png', link: 'https://go.hotmart.com/A81212712O?dp=1' },
  }[id]

  return (
    <a
      target="_blank"
      ref={banner}
      className={styles.banner}
      href={content.link}
      style={{
        backgroundImage: `url(${content.src})`
      }}
    />
  );
}
