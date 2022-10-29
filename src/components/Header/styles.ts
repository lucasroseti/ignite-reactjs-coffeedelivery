import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
  }
`

export const BaseLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;
  text-decoration: none;
`

export const HomeLink = styled(BaseLink)``

export const LocationMapLink = styled(BaseLink)`
  gap: 0.25rem;
  background: ${({ theme }) => theme.purple[100]};
  color: ${({ theme }) => theme.purple[900]};

  svg {
    color: ${({ theme }) => theme.purple[500]};
  }
`

export const ShoppingCartLink = styled(BaseLink)`
  background: ${({ theme }) => theme.yellow[100]};
  color: ${({ theme }) => theme.yellow[900]};

  &:focus {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.yellow[900]};
  }
`
