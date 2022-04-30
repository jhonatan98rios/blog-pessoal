import { post_1 } from './desenvolvimento-de-software-como-conseguir-o-primeiro-emprego'
import { post_2 } from './introducao-ao-desenvolvimento-de-software-computadores-softwares-e-linguagens-de-programacao'
import { baseImage, genImage } from '../services/utils'

export const mock_posts = [
  post_1,
  post_2,
  {
    slug: 'getting-started-design',
    title: 'Criando artes para web e redes sociais',
    image: baseImage(
      'https://miro.medium.com/max/1400/1*R97zdoGSf4gwiYY11ijXsA.png', 
      'Ilustração de uma mulher segurando uma lampada acessa como se tivesse tido uma ideia', 
      'Ilustração de mulher tendo uma ideia'
    ),
    content: `Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Leite de capivaris, leite de mula manquis sem cabeça.Quem num gosta di mim que vai caçá sua turmis!Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.
        Sapien in monti palavris qui num significa nadis i pareci latim.Copo furadis é disculpa de bebadis, arcu quam euismod magna.Leite de capivaris, leite de mula manquis sem cabeça.Mé faiz elementum girarzis, nisi eros vermeio.
        Interagi no mé, cursus quis, vehicula ac nisi.Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.Suco de cevadiss deixa as pessoas mais interessantis.Per aumento de cachacis, eu reclamis.
        A ordem dos tratores não altera o pão duris.Suco de cevadiss deixa as pessoas mais interessantis.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Sapien in monti palavris qui num significa nadis i pareci latim.
        Mé faiz elementum girarzis, nisi eros vermeio.Diuretics paradis num copo é motivis de denguis.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Delegadis gente finis, bibendum egestas augue arcu ut est.
        Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.Quem num gosta di mé, boa gentis num é.Manduma pindureta quium dia nois paga.Suco de cevadiss deixa as pessoas mais interessantis.`,
    updateAt: '24/04/2022',
    categories: [
      'design',
      'marketing',
    ]
  },
  {
    slug: 'getting-started-python',
    title: 'Programação com Python: Primeiros passos com a linguagem',
    image: baseImage(
      'https://season-training.s3-sa-east-1.amazonaws.com/images/blog/blog-17.jpg', 
      'Logo do python com códigos python de fundo', 
      'Logo do python'
    ),
    content: `Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Leite de capivaris, leite de mula manquis sem cabeça.Quem num gosta di mim que vai caçá sua turmis!Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.
        Sapien in monti palavris qui num significa nadis i pareci latim.Copo furadis é disculpa de bebadis, arcu quam euismod magna.Leite de capivaris, leite de mula manquis sem cabeça.Mé faiz elementum girarzis, nisi eros vermeio.
        Interagi no mé, cursus quis, vehicula ac nisi.Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.Suco de cevadiss deixa as pessoas mais interessantis.Per aumento de cachacis, eu reclamis.
        A ordem dos tratores não altera o pão duris.Suco de cevadiss deixa as pessoas mais interessantis.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Sapien in monti palavris qui num significa nadis i pareci latim.
        Mé faiz elementum girarzis, nisi eros vermeio.Diuretics paradis num copo é motivis de denguis.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Delegadis gente finis, bibendum egestas augue arcu ut est.
        Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.Quem num gosta di mé, boa gentis num é.Manduma pindureta quium dia nois paga.Suco de cevadiss deixa as pessoas mais interessantis.`,
    updateAt: '24/04/2022',
    categories: [
      'python',
      'testes',
    ]
  },
  {
    slug: 'getting-started-scss',
    title: 'SASS: O CSS com esteróides!!',
    image: baseImage(
      'https://www.h9web.com.br/uploads/images/2018/09/o-que-e-sass-1537210703.jpg', 
      'Logo do python com códigos python de fundo', 
      'Logo do python'
    ),
    content: `Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Leite de capivaris, leite de mula manquis sem cabeça.Quem num gosta di mim que vai caçá sua turmis!Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.
        Sapien in monti palavris qui num significa nadis i pareci latim.Copo furadis é disculpa de bebadis, arcu quam euismod magna.Leite de capivaris, leite de mula manquis sem cabeça.Mé faiz elementum girarzis, nisi eros vermeio.
        Interagi no mé, cursus quis, vehicula ac nisi.Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.Suco de cevadiss deixa as pessoas mais interessantis.Per aumento de cachacis, eu reclamis.
        A ordem dos tratores não altera o pão duris.Suco de cevadiss deixa as pessoas mais interessantis.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Sapien in monti palavris qui num significa nadis i pareci latim.
        Mé faiz elementum girarzis, nisi eros vermeio.Diuretics paradis num copo é motivis de denguis.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Delegadis gente finis, bibendum egestas augue arcu ut est.
        Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.Quem num gosta di mé, boa gentis num é.Manduma pindureta quium dia nois paga.Suco de cevadiss deixa as pessoas mais interessantis.`,
    updateAt: '24/04/2022',
    categories: [
      'python',
      'testes',
    ]
  },
  {
    slug: 'getting-started-javascript',
    title: 'Programação web com Javascript: Criando aplicações fullstack com a linguagem mais poderosa da web!',
    image: baseImage(
      'https://marquesfernandes.com/wp-content/uploads/2020/01/1555172.jpg', 
      'Logo do Javascript com códigos Javascript de fundo', 
      'Logo do Javascript'
    ),
    content: `Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Leite de capivaris, leite de mula manquis sem cabeça.Quem num gosta di mim que vai caçá sua turmis!Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.
        Sapien in monti palavris qui num significa nadis i pareci latim.Copo furadis é disculpa de bebadis, arcu quam euismod magna.Leite de capivaris, leite de mula manquis sem cabeça.Mé faiz elementum girarzis, nisi eros vermeio.
        Interagi no mé, cursus quis, vehicula ac nisi.Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.Suco de cevadiss deixa as pessoas mais interessantis.Per aumento de cachacis, eu reclamis.
        A ordem dos tratores não altera o pão duris.Suco de cevadiss deixa as pessoas mais interessantis.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Sapien in monti palavris qui num significa nadis i pareci latim.
        Mé faiz elementum girarzis, nisi eros vermeio.Diuretics paradis num copo é motivis de denguis.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Delegadis gente finis, bibendum egestas augue arcu ut est.
        Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.Quem num gosta di mé, boa gentis num é.Manduma pindureta quium dia nois paga.Suco de cevadiss deixa as pessoas mais interessantis.`,
    updateAt: '24/04/2022',
    categories: [
      'python',
      'testes',
    ]
  },
]