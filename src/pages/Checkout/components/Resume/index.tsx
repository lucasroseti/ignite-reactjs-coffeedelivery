import { ResumeContainer, ResumeText, ResumeTotal } from './styles'

interface ResumeProps {
  totalItems: number
  totalDelivery: number
}

export function Resume({ totalItems, totalDelivery }: ResumeProps) {
  const totalResume = totalItems + totalDelivery

  function formatTotalToString(total: number) {
    const [valor, cents] = String(total).split('.')
    return `R$ ${valor},${cents.padEnd(2, '0')}`
  }

  return (
    <ResumeContainer>
      <ResumeText>
        <span>Total de itens</span>{' '}
        <span>{formatTotalToString(totalItems)}</span>
      </ResumeText>
      <ResumeText>
        <span>Entrega</span> <span>{formatTotalToString(totalDelivery)}</span>
      </ResumeText>
      <div>
        <ResumeTotal>Total</ResumeTotal>
        <ResumeTotal>{formatTotalToString(totalResume)}</ResumeTotal>
      </div>
    </ResumeContainer>
  )
}
