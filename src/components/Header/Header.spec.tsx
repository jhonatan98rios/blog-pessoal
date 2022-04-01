import { render, screen } from '@testing-library/react'
import { Header } from '.'

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
})

describe('Header component', () => {
  
  it('renders correctly', () => {
    const { getByText, getByAltText } = render(
      <Header />
    )

    screen.logTestingPlaygroundURL()
  
    // Verifoica se há um teexto Home sendo exibido na tela
    expect(getByText('Home')).toBeInTheDocument()
    expect(getByText('Posts')).toBeInTheDocument()
    expect(getByAltText('DevNews!')).toBeInTheDocument()
  })

})