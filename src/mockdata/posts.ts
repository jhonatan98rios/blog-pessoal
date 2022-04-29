import { post_1 } from './desenvolvimento-de-software-como-conseguir-o-primeiro-emprego'
import { post_2 } from './introducao-ao-desenvolvimento-de-software-computadores-softwares-e-linguagens-de-programacao'
import { baseImage, genImage } from '../services/utils'

export const mock_posts = [
  post_1,
  post_2,
  {
    slug: 'getting-started',
    title: 'Getting Started',
    image: baseImage(
      'https://www.docker.com/wp-content/uploads/2021/09/Docker-build.png', 
      'Ilustração de um polvo e uma baleia brincando com conteiners', 
      'Ilustração do Docker'
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
    slug: 'getting-started',
    title: 'Getting Started',
    image: baseImage(
      'https://www.docker.com/wp-content/uploads/2021/09/Docker-build.png', 
      'Ilustração de um polvo e uma baleia brincando com conteiners', 
      'Ilustração do Docker'
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