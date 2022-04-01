import { render, screen } from '@testing-library/react'
import Home from '../../pages'


describe('Home page', () => {
  
  it('renders correctly', () => {
    const { getByText, getByAltText, debug } = render(
      <Home />
    )

    debug()

    screen.logTestingPlaygroundURL()
  
    // Verifoica se há um teexto Home sendo exibido na tela
    expect(getByText('Olá Dev!')).toBeInTheDocument()
    expect(getByAltText('Home image')).toBeInTheDocument()
  })
})