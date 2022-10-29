import { createElement } from 'react'
import * as Icon from 'phosphor-react'

import { HomeItemContainer, ITEM_COLOR_BACKGROUND } from './styles'

export type ItemColorBackground = keyof typeof ITEM_COLOR_BACKGROUND

interface HomeItemProps {
  background: ItemColorBackground
  description: string
  icon: string
}

export function HomeItem({
  background = 'gray',
  description,
  icon,
}: HomeItemProps) {
  return (
    <HomeItemContainer itemColorBackground={background}>
      <span>
        <Icon.IconContext.Provider value={{ size: 16, weight: 'fill' }}>
          {createElement(Icon[icon as keyof object])}
        </Icon.IconContext.Provider>
      </span>
      {description}
    </HomeItemContainer>
  )
}
