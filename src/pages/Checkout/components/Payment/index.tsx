import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

import { Title } from '../Title'

import { PaymentOptions, PaymentContainer, PaymentButton } from './styles'

export function Payment() {
  return (
    <PaymentContainer>
      <Title
        itemColor="purple"
        title="Pagamento"
        subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
      >
        <CurrencyDollar size={22} />
      </Title>

      <PaymentOptions>
        <PaymentButton>
          <CreditCard size={16} /> Cartão de crédito
        </PaymentButton>
        <PaymentButton>
          <Bank size={16} /> Cartão de débito
        </PaymentButton>
        <PaymentButton>
          <Money size={16} /> Dinheiro
        </PaymentButton>
      </PaymentOptions>
    </PaymentContainer>
  )
}
