import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
  margin: 2rem 0 9.813rem;

  h2 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    color: ${({ theme }) => theme.gray[700]};
    font-weight: 800;
    line-height: 1.3;
  }
`

export const CoffeeItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 3.375rem;
`
