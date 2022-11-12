import styled from 'styled-components'

export const OrderContainer = styled.div`
  background: ${({ theme }) => theme.gray[100]};
  border-radius: 6px 44px;
  padding: 2.5rem;

  hr {
    border: 0;
    border-top: 1px solid ${({ theme }) => theme.gray[130]};
    margin: 1.5rem 0;
  }
`

export const OrderSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const OrderButton = styled.a`
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.yellow[500]};
  border: 0;
  border-radius: 6px;
  padding: 0.75rem 0;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.6;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.yellow[900]};
  }
`
