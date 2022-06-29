
export function numberToMonth(number: number) {
  return ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'][number-1]
}

export function formateDate(date: string) {
  const [year, month, day] = date.split('-')
  return `${day} de ${numberToMonth(+month)} de ${year}`
}