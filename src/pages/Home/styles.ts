import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5.75rem 0;
  gap: 3.5rem;
`

export const HomeIntro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.25rem;

  img {
    width: 29.75rem;
  }
`

export const HomeTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: 'Baloo 2';
    font-size: 3rem;
    font-weight: bolder;
    color: ${({ theme }) => theme.gray[900]};
    line-height: 133%;
  }

  h2 {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.gray[700]};
    font-weight: 400;
    line-height: 1.6;
  }
`

export const HomeItems = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1.25rem 2.5rem;
`
