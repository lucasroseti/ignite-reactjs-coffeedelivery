import { createElement } from 'react'
import * as Icon from 'phosphor-react'

import { IconCustomContainer, ITEM_COLOR_BACKGROUND } from './styles'

export type ItemColorBackground = keyof typeof ITEM_COLOR_BACKGROUND

interface IconCustomProps {
  icon: string
  background: ItemColorBackground
}

export function IconCustom({ icon, background }: IconCustomProps) {
  return (
    <IconCustomContainer itemColorBackground={background}>
      <Icon.IconContext.Provider value={{ size: 16, weight: 'fill' }}>
        {createElement(Icon[icon as keyof object])}
      </Icon.IconContext.Provider>
    </IconCustomContainer>
  )
}
