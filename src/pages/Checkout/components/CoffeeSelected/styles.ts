import styled from 'styled-components'

export const CoffeeSelectedContainer = styled.div``

export const CoffeeSelectedSection = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CoffeeSelectedCard = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    width: 4rem;
  }
`

export const CoffeeSelectedDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    color: ${({ theme }) => theme.gray[700]};
  }
`

export const CoffeeSelectedActions = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const CoffeeSelectedButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0 0.5rem;
  border: 0;
  border-radius: 6px;
  background: ${({ theme }) => theme.gray[130]};
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.6;
  text-transform: uppercase;

  svg {
    color: ${({ theme }) => theme.purple[500]};
  }

  &:hover {
    background: ${({ theme }) => theme.gray[150]};
  }

  &:focus {
    background: ${({ theme }) => theme.purple[100]};
  }
`

export const CoffeeSelectedPrice = styled.span`
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.3;
`
