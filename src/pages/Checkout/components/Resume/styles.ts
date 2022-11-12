import styled from 'styled-components'

export const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
  }
`

export const ResumeText = styled.div`
  span {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.3;
  }

  span + span {
    font-size: 1rem;
  }
`

export const ResumeTotal = styled.span`
  color: ${({ theme }) => theme.gray[700]};
  font-weight: 700;
  font-size: 1.25;
  line-height: 1.3;
`
