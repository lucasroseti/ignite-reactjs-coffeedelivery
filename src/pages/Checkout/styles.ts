import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  padding: 2.5rem 0;

  h2 {
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-weight: 700;
    color: ${({ theme }) => theme.gray[700]};
    line-height: 1.3;
  }

  form {
    display: grid;
    grid-template-columns: 640px auto;
    gap: 2rem;
  }
`

export const CheckoutSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`
