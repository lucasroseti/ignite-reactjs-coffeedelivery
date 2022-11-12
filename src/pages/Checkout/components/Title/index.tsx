import { ReactNode } from 'react'

import { TitleContainer, ITEM_COLOR, TitleDescription } from './styles'

export type ItemColor = keyof typeof ITEM_COLOR

interface TitleProps {
  itemColor: ItemColor
  title: string
  subtitle: string
  children: ReactNode
}

export function Title({ itemColor, title, subtitle, children }: TitleProps) {
  return (
    <TitleContainer itemColor={itemColor}>
      {children}

      <TitleDescription>
        <h3>{title}</h3>
        <span>{subtitle}</span>
      </TitleDescription>
    </TitleContainer>
  )
}
