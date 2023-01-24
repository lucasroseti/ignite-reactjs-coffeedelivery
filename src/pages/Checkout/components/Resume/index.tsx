import { useContext } from 'react'

import { CheckoutContext } from '../../../../contexts/CheckoutContext'

import { ResumeContainer, ResumeText, ResumeTotal } from './styles'

interface ResumeProps {
  totalItems: number
  totalDelivery: number
}

export function Resume({ totalItems, totalDelivery }: ResumeProps) {
  const { formatPriceToString } = useContext(CheckoutContext)
  const totalResume = totalItems + totalDelivery

  return (
    <ResumeContainer>
      <ResumeText>
        <span>Total de itens</span>{' '}
        <span>{formatPriceToString(totalItems)}</span>
      </ResumeText>
      <ResumeText>
        <span>Entrega</span> <span>{formatPriceToString(totalDelivery)}</span>
      </ResumeText>
      <div>
        <ResumeTotal>Total</ResumeTotal>
        <ResumeTotal>{formatPriceToString(totalResume)}</ResumeTotal>
      </div>
    </ResumeContainer>
  )
}
