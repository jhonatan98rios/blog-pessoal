import useWindowDimensions from 'hooks/useWindowDimensions';
import { Html } from 'next/document';
import { useEffect, useRef, useState } from 'react';
import { AdType, advertisements } from './advertisements'
import styles from './styles.module.scss'

interface IAdBanner {
  id: string
}

export function AdBanner({ id }: IAdBanner) {

  const { width } = useWindowDimensions();
  const banner = useRef(null)
  const advertisement: AdType = advertisements[id]
  const [isVisible, setVisible] = useState(true)

  function handleScroll() {
    if (banner.current) {
      if (this.scrollY > 750) {
        banner.current.classList.add('fixedBanner')
      } else {
        banner.current.classList.remove('fixedBanner')
      }
    }
  }

  useEffect(() => {
    addEventListener('scroll', handleScroll)
    return () => {
      removeEventListener('scroll', handleScroll)
    }
  }, [])

  return isVisible && (
    <div ref={banner} className={styles.banner}>
      <span
        onClick={() => setVisible(false)}
        className={styles.close}
      >
        ✕
      </span>
      <a
        className={styles.anchor}
        style={{
          backgroundImage: `url(${advertisement.src[
            width < 1024 ? 'touch' : 'desktop'
          ]})`
        }}
        target="_blank"
        href={advertisement.link}
      >
        <h4> {advertisement.title} </h4>
        <p dangerouslySetInnerHTML={{__html: advertisement.description}} />
      </a>
    </div>
  );
}
