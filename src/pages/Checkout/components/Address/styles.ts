import styled from 'styled-components'

interface InputProps {
  widthInput: number
}

export const AddressContainer = styled.section`
  background: ${({ theme }) => theme.gray[100]};
  padding: 2.5rem;
  border-radius: 6px;
  gap: 2rem;
  display: flex;
  flex-direction: column;
`

export const AddressSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const AddressColumn = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const AddressInput = styled.input<InputProps>`
  min-width: ${({ widthInput }) => `${widthInput}rem`};
  background: ${({ theme }) => theme.gray[120]};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.3;
  border: 1px solid ${({ theme }) => theme.gray[130]};
  border-radius: 6px;
  padding: 0.75rem;

  &:focus {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.yellow[900]};
  }

  &::placeholder {
    color: ${({ theme }) => theme.gray[400]};
  }
`

export const AddressInputCustom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: ${({ theme }) => theme.gray[400]};
    font-size: 0.75rem;
    font-style: italic;
    font-weight: 400;
    line-height: 1.3;
    margin-left: -4rem;
  }
`
