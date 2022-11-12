import styled from 'styled-components'

export const ITEM_COLOR_BACKGROUND = {
  gray: 'gray-600',
  purple: 'purple-500',
  yellow: 'yellow-500',
  'yellow-dark': 'yellow-900',
} as const

interface ItemBackgroundProps {
  itemColorBackground: keyof typeof ITEM_COLOR_BACKGROUND
}

export const IconCustomContainer = styled.span<ItemBackgroundProps>`
  display: flex;
  color: ${({ theme }) => theme.white};
  background: ${({ theme, itemColorBackground }) => {
    const [color, variant] =
      ITEM_COLOR_BACKGROUND[itemColorBackground].split('-')
    return theme[color as keyof object][variant]
  }};
  border-radius: 50%;
  padding: 0.5rem;
`
