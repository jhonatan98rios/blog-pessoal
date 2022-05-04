import { baseImage, genImage, genLink } from '../services/utils'

export const post_1 = {
  slug: 'desenvolvimento-de-software-como-conseguir-o-primeiro-emprego',
  title: 'Desenvolvimento de software: Como conseguir o primeiro emprego?',
  image: baseImage(
    'https://img.freepik.com/fotos-gratis/pessoa-sorridente-acenando-com-a-mao-em-videochamada-no-laptop_482257-24392.jpg?w=2000',
    'Imagem de uma mulher comemorando em frente ao notebook',
    'Mulher comemorando'
  ),
  content: `
    <p>
        Muitas pessoas desistem da área de programação após os primeiros meses de estudo, acreditando que estão distantes de seu objetivo ou mesmo que não conseguirão encontrar uma vaga ao qual seu perfil atenda os requisitos. A verdade é que a barreira de entrada pode parecer um pouco assustadora para os iniciantes, porém, o déficit de profissionais no mercado acaba forçando muitas empresas a contratarem profissionais mesmo que eles não atendam todos os requisitos. Saber avaliar quais requisitos são de fato necessários e quais devem ser priorizados também não é uma tarefa fácil para quem nunca participou de projetos profissionais e é aqui que vamos focar nossa atenção. Saber o que estudar e como estudar pode reduzir em alguns meses o tempo que você levará para conseguir seu primeiro emprego.<p> 
    <i>
        Obs: Essas dicas são baseadas na minha experiência e na de alguns colegas de profissão. Esse cenário pode variar e pode ser que existam outros planos de estudos que possam melhor se adequar ao seu perfil, então não assuma essas dicas como verdades absolutas e continue pesquisando sobre os assuntos tratados nesse artigo.
    </i>

    <br><br>
    <h3> Começando do básico </h3>
    <p>
        Antes de decidir o que estudar, é importante entender que a área de tecnologia é extremamente ampla e é comum desenvolvedores migrarem entre setores durante suas carreiras, então sua primeira escolha não precisa necessariamente ser a única. Além disso, existem conhecimentos que são imprescindíveis em quase todas as áreas.
        <br><br>
        Um dos principais conhecimento obrigatórios para a área de desenvolvimento, é a lógica de programação. Essa é provavelmente a porta de entrada da maioria dos programadores autodidatas. Aprender lógica de programação vai te ajudar a melhorar sua capacidade de estruturar e resolver problemas de forma lógica além de facilitar seus próximos passos na área de programação. Além da lógica de programação, entender mesmo que superficialmente o funcionamento do computador e seus componentes (os chamados hardwares), os sistemas operacionais, como os processos são executados por eles e o funcionamento da internet.
        <br>
        Após compreender as bases, será necessário escolher alguma linguagem de programação para começar. Uma forma de escolher a linguagem de programação é pesquisar quais setores da área de TI estão em alta, o que pode significar melhores salários e maior número de vagas e a partir disso escolher uma das linguagens que podem ser utilizadas naquela área de atuação. Atualmente (2021) o maior número de vagas está nos mercados de Desenvolvimento de Sistemas Web, Aplicativos Mobile e Data Science.
    </p>

    <br>
    <h3> Desenvolvimento Web </h3>
    <p>
        Começando pelo Desenvolvimento de Sistemas para Web nos deparamos com duas principais frentes de desenvolvimento. O front-end, que é responsável por criar as telas, ou seja, as páginas dos sites, blogs e e-commerces que você irá acessar. As tecnologias utilizadas no front-end são o HTML, o CSS e o Javascript. E o back-end que é responsável por criar os sistemas que serão executados nos servidores aonde são realizadas as operações de compra com cartão de crédito, as verificações de CEP e CPF e aonde estão armazenados os bancos de dados que guardam as listas de produtos, posts, comentários e dados cadastrais de clientes. Aqui existem centenas de opções, cada uma com seu caso de uso e características próprias. As mais populares atualmente são Java, C# (C sharp), PHP, Python e Javascript. Além de aprender uma dessas linguagens, também é recomendado que o desenvolvedor domine alguns do frameworks daquela linguagem. Um framework nada mais é do que um conjunto de ferramentas que podem ser utilizados para otimizar o desenvolvimento, oferencendo recursos arquiteturais, de segurança, performance e até extendendo as funcionalidades da linguagem através de plugins criados em outras linguagens.
    </p>
    <i>
        Obs: Dentro dessas áreas ainda existem dezenas de especializações e adaptações, mas esse não é o momento para se preocupar com isso.
    </i>

    <br><br>
    <h3> Desenvolvimento Mobile </h3>
    <p>
        Agora falando sobre Aplicativos Mobile, também podemos dividi-las em 2 áreas. O desenvolvimento de aplicativos para Android e IOS. Do lado do android, não há requisitos obrigatórios. As linguagens de programação que podem ser usadas são o Java e o Kotlin (recomendada pelo Google). Já no caso do IOS, a Apple obriga que seus desenvolvedores utilizem um dispositivo que rode o Mac OS, ou seja, um computador da Apple. As linguagens que podem ser utilizadas na criação de apps IOS são o Objective-C (descontinuada) e o Swift (recomendada pela Apple).
        <br>
        Apesar dessas serem as tecnologias oficiais recomendadas pelas empresas por trás das plataformas, existem outras soluções, muitas vezes criadas pela comunidade, que permitem criar aplicativos utilizando outras tecnologias. As linguagens mais populares nesse sentido são o Dart, o C# e o Javascript.
    </p>

    <br>
    <h3> Data Science </h3>
    <p>
        Chegando agora em Data Science, também podemos encontrar diversas opções para quem se interessa por esse mercado. As opções mais comuns de encontrarmos vagas são a de Analista de Dados e a de Engenheiro de Dados. O Analista de Dados é o profissional que utiliza de grandes quantidades de dados, programação e inteligência artificial para extrair insights, ou seja, é capaz de identificar problemas, soluções e melhorias analisando os dados coletados por seu aplicativo, loja virtual, redes sociais e campanhas de marketing. O Engenheiro de Dados é responsável por criar ferramentas de coleta, armazenamento, processamento e entrega desses dados. Ambos os profissionais que trabalham com dados precisam ter um bom conhecimento em Bancos de dados, serviços de Cloud (Google Cloud e AWS por exemplo), conhecimento sólido em linguagens de programação como Python, R, Java e Javascript. 
        <br>
        Todas essas áreas tem milhares de vagas disponíveis com vários níveis de senioridade e muitas com possibilidade de trabalho remoto. 
    </p>

    ${genImage(baseImage(
    'https://miro.medium.com/max/1400/1*8Eh3Ppwz68lJpGnHap6fmw.jpeg',
    'Imagem de um homem sentado em frente ao computador trabalhando',
    'Homem trabalhando'
  ))}
    
    <br><br>
    <h3> O próximo passo </h3>
    <p>
        Depois de aprender as bases e escolher qual será seu objetivo é importante manter o foco pelo menos nos primeiro meses. Nesse inicio é essencial que você se dedique somente a área que você escolheu atuar. Isso evitará que você fique confuso sobre as responsabilidades que lhe serão atribuídas e gaste tempo estudando tecnologias que não serão utilizadas nesse primeiro momento.
        <br>
        Além dos conhecimento restritos de cada área, também existem conhecimentos que são essenciais em todas elas. Alguns deles são o Versionamento de código com ferramentas como o Git, Metodologias Ágeis como o Scrum, Testes de Software e o inglês (sim o idioma).
        <br>
        Existem diversos cursos no youtube sobre Git, Scrum e Testes então será bem fácil estudar eles em paralelo à sua rotina de estudos principal. Já o inglês é algo que deve ser construído com o tempo. Nesse primeiro momento ele pode não parecer essencial, mas conforme você avançar em sua carreira perceberá que ele pode te abrir várias portas e começar cedo é essencial para no futuro não perder oportunidades.
    </p>

    <br>
    <h3> Mais dicas: </h3>
    <p>
        Tempo de experiência não é a mesma coisa que tempo de trabalho formal. Estamos acostumados ao formato tradicional de trabalho, aonde para ter tempo de experiência é necessário estar empregado por alguma empresa, entretanto, é comum na área de tecnologia considerarmos nossos projetos pessoais como experiências uma vez que elas agregam no nosso conhecimento mesmo que de forma mais superficial, por isso, faça projetos e compartilhe eles para comprovar seu conhecimento.
        <br>
        Seja organizado. Crie um cronograma de estudos, separe por tópicos ordenados por prioridade e defina um tempo aproximado que você se dedicará para aquele assunto. Para isso você pode usar um aplicativo de planilhas ou o Trello.
        <br>
        Se possível, abra uma empresa como prestador de serviços. Muitas empresas dão preferência por contratar devs como Pessoa Jurídica, o que implica em menos impostos, então quando for começar a se candidatar pesquise sobre o assunto e veja qual formato de empresa esta disponível no seu estado. No estado de São Paulo, por exemplo, o formato de empresa MEI oferece vários benefícios, principalmente para prestadores de serviço iniciantes.
        <br>
        Siga influenciadores e programadores que postem conteúdo e notícias sobre a área de tecnologia. Aqui estão alguns que vão te ajudar bastante:
        <br><br>

        Filipe Deschamps: ${genLink('https://www.youtube.com/c/FilipeDeschamps')} <br> 
        Igor Oliveira: ${genLink('https://www.youtube.com/c/Programadorbr')} <br>
        Bullas Attekita: ${genLink('https://www.youtube.com/c/AttekitaDev')} <br>
        Código Fonte TV: ${genLink('https://www.youtube.com/c/codigofontetv')} <br>
        Dev Pleno: ${genLink('https://www.youtube.com/c/Devplenocom')} <br>
        Rafaella Ballerini: ${genLink('https://www.youtube.com/c/rafaellaballerini')}" <br>
        Nerdologia: ${genLink('https://www.youtube.com/c/nerdologia')} <br>
        Alura: ${genLink('https://www.youtube.com/c/Alura')} <br>
        Rocketseat: ${genLink('https://www.youtube.com/c/RocketSeat')} <br>

        <br>
        Crie um Linkedin e o mantenha atualizado. Adicione muitos recrutadores e outros programadores. Faça cursos, participe de eventos online e maratonas de programação e compartilhe suas experiências e certificados no LinkedIn.
        <br><br>
        Crie projetos pessoais com as tecnologias pedidas pelas vagas que te interessam e compartilhe no seu perfil.
        <br><br>
        E por ultimo e talvez mais importante, faça parte de comunidades. Existem centenas de comunidades de tecnologia no Facebook, LinkedIn, Instagram, Youtube, Discord, Slack e Telegram. Busque por aquelas que façam sentido para você e aproveite elas para tirar dúvidas e pedir sugestões. Feedbacks são extremamente importantes então aprenda a ouvir as opniões de quem tem mais experiência e não se frustre se tiver cometido erros pois isso faz parte!
        <br><br>
        Dito tudo isso, te desejo boa sorte e sinta-se a vontade para me procurar nas redes sociais caso tenha alguma dúvida. Nos vemos por aí!
    </p>
    `,
  updateAt: '24/04/2022',
  categories: [
    'programacao',
    'carreira',
  ] 
}