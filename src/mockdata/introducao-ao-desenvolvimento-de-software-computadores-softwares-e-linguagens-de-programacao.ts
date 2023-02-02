import { baseImage, genImage } from 'services/utils'

export const post_2 = {
  slug: 'introducao-ao-desenvolvimento-de-software-computadores-softwares-e-linguagens-de-programacao',
  title: 'Introdução ao desenvolvimento de software: Computadores, Softwares e Linguagens de Programação',
  banner: baseImage(
    'https://www.oficinadanet.com.br/imagens/post/24414/pc-gamer-barato.jpg',
    'Imagem de uma mulher jogando no computador',
    'Mulher jogando'
  ),
  content: `
    <p>Para começar, precisamos entender o que é um computador. Basicamente, qualquer dispositivo que seja capaz de executar aplicativos, processar dados e realizar operações é considerado um computador (aqui podemos citar como exemplo nossos notebooks, celulares e televisores).
    <br><br>
    Os computadores são equipamentos eletrônicos, compostos por diversos chips, placas e componentes conhecidos como hardwares. Dentre eles o principal é o processador que funciona como o cérebro do computador. Ele possui milhões de pequenos interruptores conhecidos como transístores.<p>

    ${genImage(baseImage(
      'https://t.ctcdn.com.br/V3m-OBhgexV4aZXcovmH6XrY4dw=/1400x788/smart/i272849.jpeg',
      'Imagem de um processador com circuítos',
      'Processador com circuitos'
    ))}

    <p>
      Os transistores controlam a passagem da eletricidade. Os processadores usam essas correntes elétricas para representar os números 0 e 1. O transistor ligado representa o número 1 e o desligado representa o 0. Esse padrão é conhecido como sistema binário. Computadores usam séries de 0 e 1 para compor letras, sons, imagens e executar instruções. Um conjunto de instruções realizadas por um computador são conhecidas como software.
      <br><br>
      Um software nada mais é do que um conjunto de regras estruturadas de forma que possam ser interpretadas por um computador. Como exemplo de software temos o WhatsApp, o Google Chrome, o Windows, o Android, o IOS e até jogos como o Fortnite (sim, jogos também são softwares).
      <br><br>
      O principal software que roda em um computador é o sistema operacional. É ele que vai integrar o hardware aos programas instalados. Se você estiver usando um computador, provavelmente o software instalado será o Windows, o Linux ou o Mac. Já se você estiver usando um celular, o sistema operacional instalado será o Android ou o IOS. O sistema operacional é quem define quais programas e jogos podem ser instalados em um dispositivo.
    </p>

    <i>
      Curiosidade: O Xbox e o Playstation também são computadores, e executam um sistema operacional. O Xbox roda o Xbox System Software criado pela Microsoft e o Playstation executa o Playstation OS, desenvolvido pela Sony.
    </i>

    ${genImage(baseImage(
      'https://studiomarciomarkkx.com.br/wp-content/uploads/2021/09/apps-pesquisa.jpeg',
      'Imagem de icones de aplicativos',
      'Aplicativos'
    ))}

    <p>
      No início, os softwares, de fato, eram criados utilizando código binário, porém, com o avanço da tecnologia, foram criadas formas de simplificar o processo de desenvolver softwares. Hoje em dia, a forma mais comum de se desenvolver um software é escrevendo sua lógica e suas regras através de uma linguagem de programação.
      <br><br>
      Uma amostra de como seria o mesmo programa escrito em binário e em Python (linguagem de programação):
      <br><br>
      <code>
        00001000 00000101 00000001
      </code>
      <br><br>
      Esse código exibirá o número 5 na tela.
      <br><br>
      <code>
        print(5)
      </code>
      <br><br>
      Esse código também exibirá o número 5 na tela.
      <br><br>
      Uma linguagem de programação nada mais é do que um padrão de escrita humanizado (compreensível pelo ser humano e não pelo computador) que torna possível estruturar as instruções e regras que compõem um programa. Esses padrões são necessários para que essa linguagem seja convertida para uma linguagem compreensível pelo computador.
      <br><br>
      O processo de conversão de uma linguagem de programação para uma linguagem de computador pode ser realizado através da compilação, onde o código fonte (linguagem de programação) gera um executável que pode ser lido pelo computador, ou então através da interpretação, onde o computador traduz a linguagem de programação em código de máquina (binário) durante o processo de execução. Esse meio costuma ser mais custoso para o computador, o que torna esse tipo de software mais lento em relação aos softwares compilados (isso não se aplica a todos os casos).
    </p>

    ${genImage(baseImage(
      'https://idocode.com.br/wp-content/uploads/2020/05/0-destaque-linguagens-de-programacao-2019.jpg',
      'Imagem de icones de linguagens de programação',
      'Linguagens de programação'
    ))}

    <p>
      As linguagens de programação podem ser classificadas como linguagens de alto nível e de baixo nível. Quanto mais próximas da linguagem humana (normalmente o inglês) mais alto é o nível da linguagem. Quanto mais parecidas com o código de máquina, mais baixo é o nível da linguagem. Normalmente as linguagens de baixo nível tendem a ser mais performáticas que as linguagens de alto nível, por serem mais simples de serem convertidas para o código de máquina, o que torna o processo mais eficiente, porém isso aumenta bastante a complexidade durante o desenvolvimento do software.
      <br><br>
      Existem milhares de linguagens de programação, cada uma com suas características específicas. A maioria das linguagens foi desenvolvida com um propósito específico, mas existem linguagens que são conhecidas como linguagens de propósito geral, ou seja, podem ser utilizadas em diversos tipos de sistemas.
      <br><br>
      Alguns exemplos de linguagem de propósito específico, são o Kotlin, criado pelo Google para a criação de aplicativos Android, o Swift, criado pela Apple para criação de aplicativos IOS, o PHP e o Ruby, usados no desenvolvimento web como em e-commerces e blogs, e o R que foi desenvolvido para ser utilizado na análise de dados.
      <br><br>
      Alguns exemplos de linguagens de propósito geral são o Java e o C#, que podem ser utilizados na criação de aplicativos Android, Windows, Sistemas para a internet e Jogos 2D e 3D. O Python, que pode ser utilizado para criar programas para Windows, Linux, Mac, Sistemas Web e Inteligência Artificial. E também o Javascript, que é a única linguagem capaz de ser executada dentro do navegador (chrome, safari, edge etc) e que também pode ser utilizada em aplicativos Android e IOS, jogos 2D e 3D, Sistemas Web e até Inteligência artificial.
    </p>
  `,
  updateAt: '24/04/2022',
  categories: [
    'programacao',
    'software',
  ]
}
