import { createElement } from 'react'
import * as Icon from 'phosphor-react'

import { IntroItemContainer, ITEM_COLOR_BACKGROUND } from './styles'

export type ItemColorBackground = keyof typeof ITEM_COLOR_BACKGROUND

interface IntroItemProps {
  background: ItemColorBackground
  description: string
  icon: string
}

export function IntroItem({
  background = 'gray',
  description,
  icon,
}: IntroItemProps) {
  return (
    <IntroItemContainer itemColorBackground={background}>
      <span>
        <Icon.IconContext.Provider value={{ size: 16, weight: 'fill' }}>
          {createElement(Icon[icon as keyof object])}
        </Icon.IconContext.Provider>
      </span>
      {description}
    </IntroItemContainer>
  )
}
