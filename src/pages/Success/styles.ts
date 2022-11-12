import styled from 'styled-components'

export const SuccessContainer = styled.div`
  padding: 5rem 0;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;
    color: ${({ theme }) => theme.yellow[900]};
  }

  h2 {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${({ theme }) => theme.gray[700]};
  }
`

export const SuccessInfo = styled.div`
  display: flex;
  gap: 6.375rem;
  padding: 2.5rem 0;

  img {
    width: 30.75rem;
  }
`

export const SuccessBorder = styled.div`
  width: 32.875rem;
  height: 16.25rem;
  border: 1px solid transparent;
  border-radius: 6px 36px;
  background-image: linear-gradient(white, white),
    linear-gradient(
      90deg,
      ${({ theme }) => theme.yellow[500]},
      ${({ theme }) => theme.purple[500]}
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
`

export const SuccessDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
`
