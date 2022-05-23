import Link from 'next/link';
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
          social.map((s, i) => (
            <li>
              <Link href={s.link} key={i}>
                <a target="_blank" rel="noopener noreferrer">
                  <img 
                    className={styles.image} 
                    src={s.src}
                    alt={s.alt}
                    title={s.title}
                    width={36}
                    height={36}
                  />
                </a>
              </Link>
            </li>
          ))
        }
      </ul>
      <p className={styles.copyright}>
        Todos os textos, imagens e vídeos presentes na página são autorais ou de bancoas de imagens abertos, por tanto sem restrições de uso. <br />
        Não há qualquer restrição de uso do conteúdo citado, sendo ele produzido unicamente para fins didáticos.
      </p>
    </footer>
  );
}
