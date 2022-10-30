import styled from 'styled-components'

export const CoffeeItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 16rem;
  border-radius: 6px 36px;
  background: ${({ theme }) => theme.gray[100]};

  img {
    width: 7.5rem;
    margin-top: -1.25rem;
  }

  h3 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.gray[700]};
  }

  h4 {
    font-weight: 400;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.gray[400]};
    padding-top: 0.5rem;
  }

  h3,
  h4 {
    line-height: 1.3;
    text-align: center;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`

export const CoffeeTags = styled.div`
  padding: 0.75rem 0 1rem;

  span {
    padding: 0.25rem 0.5rem;

    color: ${({ theme }) => theme.yellow[900]};
    background: ${({ theme }) => theme.yellow[100]};
    font-size: 0.625rem;
    line-height: 1.3%;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: 100px;
  }

  span + span {
    margin-left: 0.25rem;
  }
`

export const CoffeeBuy = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.25rem;
  padding: 2rem 1.5rem 1.25rem;
`

export const CoffeePrice = styled.div``

export const CoffeePriceSymbol = styled.span`
  font-weight: 400;
  font-size: 0.875rem;
  text-align: right;
  color: ${({ theme }) => theme.gray[600]};
  padding-right: 0.25rem;
`

export const CoffeePriceValue = styled.span`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 1.5rem;
  text-align: right;
  color: ${({ theme }) => theme.gray[600]};
`

export const CoffeeActions = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const ChartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border: 0;
  border-radius: 6px;
  background: ${({ theme }) => theme.purple[900]};
  color: ${({ theme }) => theme.white};

  &:hover {
    background: ${({ theme }) => theme.purple[500]};
  }
`
