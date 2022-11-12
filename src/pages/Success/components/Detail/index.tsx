import { ReactNode } from 'react'

import {
  IconCustom,
  ItemColorBackground,
} from '../../../../components/IconCustom'

import { DetailContainer } from './styles'

interface DetailProps {
  background: ItemColorBackground
  icon: string
  children: ReactNode
}
export function Detail({ background, icon, children }: DetailProps) {
  return (
    <DetailContainer>
      <IconCustom background={background} icon={icon} />

      <div>{children}</div>
    </DetailContainer>
  )
}
