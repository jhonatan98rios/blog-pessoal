import { render, screen } from '@testing-library/react'
import { ActiveLink } from '.'

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
})

describe('ActiveLink component', () => {
  
  it('renders correctly', () => {
    render(
      <ActiveLink href="/" activeClassName="active">
        <a> Home </a>
      </ActiveLink>
    )
  
    // Verifoica se há um teexto Home sendo exibido na tela
    expect(screen.getByText('Home')).toBeInTheDocument()
  })

  it('adds active class if the link as currently active', () => {
    const { getByText }= render(
      <ActiveLink href="/" activeClassName="active">
        <a> Home </a>
      </ActiveLink>
    )

    expect(getByText('Home')).toHaveClass('active')
  })

})