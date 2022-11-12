import {
  IconCustom,
  ItemColorBackground,
} from '../../../../components/IconCustom'

import { IntroItemContainer } from './styles'

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
    <IntroItemContainer>
      <IconCustom background={background} icon={icon} />
      {description}
    </IntroItemContainer>
  )
}
