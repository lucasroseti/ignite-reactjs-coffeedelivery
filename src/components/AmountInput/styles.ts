import styled from 'styled-components'

export const AmountInputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 0;
  border-radius: 6px;
  background: ${({ theme }) => theme.gray[130]};
  padding: 0.5rem;
  gap: 0.25rem;

  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`

export const AmountInputInput = styled.input`
  background: transparent;
  color: ${({ theme }) => theme.gray[900]};
  width: 1.25rem;
  border: none;
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
`

export const AmountButton = styled.button`
  display: flex;
  background: transparent;
  color: ${({ theme }) => theme.purple[500]};
  border: 0;

  &:hover {
    color: ${({ theme }) => theme.purple[900]};
  }
`
