export type AdType = {
  title: string,
  description: string,
  src: {
    desktop:string,
    touch: string,
  },
  link: string
}

export const advertisements = {
  'A81212712O': {
    title: 'Pacote Full-Stack',
    description: 'O mais completo treinamento da Danki Code para quem deseja se tornar um Profissional Full-Stack',
    src: {
      desktop:'/adbanners/desktop/A81212712O.png',
      touch: '/adbanners/touch/A81212712O.png',
    },
    link: 'https://go.hotmart.com/A81212712O?dp=1'
  },
}
