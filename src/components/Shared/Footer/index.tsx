import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { baseImage } from '../../../services/utils';
import styles from './styles.module.scss';


export function Footer() {

  const social = [
    {
      ...baseImage(
        '/instagram.png',
        'Icone do Instagram',
        'Instagram'
      ),
      link: 'https://www.instagram.com/jhonatan.teixeira.rios/'
    },
    {
      ...baseImage(
        '/youtube.png',
        'Icone do Youtube',
        'Youtube'
      ),
      link: 'https://www.youtube.com/channel/UCO0Wn-Pd5Y5ELJ7Nrl2SVLQ'
    },
    {
      ...baseImage(
        '/linkedin.png',
        'Icone do Linkedin',
        'Linkedin'
      ),
      link: 'https://www.linkedin.com/in/jhonatan-teixeira-rios-499400128/'
    }
  ]

  return (
    <footer className={styles.footer}>
      <ul className={styles.social}>
        {
          social.map(s => (
            <Link href={s.link}>
              <a target="_blank" rel="noopener noreferrer">
                <img className={styles.image} src={s.src} alt={s.alt} title={s.title} />
              </a>
            </Link>
          ))
        }
      </ul>
    </footer>
  );
}
