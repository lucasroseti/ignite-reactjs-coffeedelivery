import styled from 'styled-components'

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.gray[100]};
  padding: 2.5rem;
  border-radius: 6px;
  gap: 2rem;
`

export const PaymentContent = styled.div``

export const PaymentOptions = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const PaymentButton = styled.button`
  display: flex;
  gap: 0.75rem;
  padding: 1rem;
  border: 0;
  border-radius: 6px;
  background: ${({ theme }) => theme.gray[130]};
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.6;
  text-transform: uppercase;
  width: 11.25rem;

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
