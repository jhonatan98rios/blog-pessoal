import React, { useEffect } from 'react';
import { SEO, NavigationControl } from 'components/Shared';
import styles from './style.module.scss';

export default function Autor() {

  useEffect(() => {
    let root = document.querySelector<HTMLElement>(':root');
    root.style.setProperty('--overflow', 'hidden');

    return () => {
      root.style.setProperty('--overflow', 'auto');
    }
  }, [])

  return (
    <>
      <SEO
        title="Um pouco sobre o mim | Como ser um desenvolvedor?"
        description="Um pouco sobre o mim | Conheça um pouco sobre minha trajetória profissional e academica"
        image="https://www.jhonatan-dev-rios-blog.com.br/autor/avatar.png"
        excludeTitleSuffix
      />

      <NavigationControl previousPath="/posts" />

      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.avatar}>
            <span>
              <img src="autor/avatar.png" alt="Imagem do autor" />
            </span>
          </div>

          <div className={styles.container}>
            <h1> Um pouco sobre o mim </h1>
            <p>
              Meu nome é <strong> Jhonatan Teixeira Rios</strong>, sou formado em Comunicação Visual e tenho 6 anos de atuação no mercado de tecnologia, sendo 2 anos como Designer e Motion Designer, 2 anos como Desenvolvedor Front-End e 2 anos como Desenvolvedor Full-Stack. Hoje trabalho como Engenheiro de Dados para uma empresa e pagamentos nacional e continuo atuando de forma independente como Desenvolvedor Web para uma vasta carteira de clientes. Minha bagagem me permite atuar em diversas frentes do desenvolvimento, participando ativamente em todas as etapas da entrega de um produto digital. Já atuei em aplicações relacionadas à automação residêncial, inteligência artificial, desenvolvimento de games e na criação de CMS para blogs empresáriais. <br />
              Para saber mais sobre mim e sobre meu trabalho, acesse meu <a className={styles.link} href="https://jhonatan-dev-rios.vercel.app/" target="_blank" rel="noopener noreferrer"> site pessoal. </a>
            </p>
          </div>

        </section>
      </main>
    </>
  );
}
