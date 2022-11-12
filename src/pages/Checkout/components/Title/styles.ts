import styled from 'styled-components'

export const ITEM_COLOR = {
  purple: 'purple-500',
  'yellow-dark': 'yellow-900',
} as const

interface ItemColorProps {
  itemColor: keyof typeof ITEM_COLOR
}

export const TitleContainer = styled.div<ItemColorProps>`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  svg {
    color: ${({ theme, itemColor }) => {
      const [color, variant] = ITEM_COLOR[itemColor].split('-')
      return theme[color as keyof object][variant]
    }};
  }
`

export const TitleDescription = styled.div`
  h3 {
    color: ${({ theme }) => theme.gray[700]};
    font-size: 1rem;
  }

  span {
    font-size: 0.875rem;
  }

  h3,
  span {
    font-weight: 400;
    line-height: 1.3;
  }
`
