import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'

import { Title } from '../Title'

import { PaymentOptions, PaymentContainer, PaymentButton } from './styles'

export function Payment() {
  const { setValue } = useFormContext()

  function handlePaymentSelected(typePayment: string) {
    setValue('payment', typePayment)
  }

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
        <PaymentButton
          type="button"
          onClick={() => handlePaymentSelected('Cartão de crédito')}
        >
          <CreditCard size={16} /> Cartão de crédito
        </PaymentButton>
        <PaymentButton
          type="button"
          onClick={() => handlePaymentSelected('Cartão de débito')}
        >
          <Bank size={16} /> Cartão de débito
        </PaymentButton>
        <PaymentButton
          type="button"
          onClick={() => handlePaymentSelected('Dinheiro')}
        >
          <Money size={16} /> Dinheiro
        </PaymentButton>
      </PaymentOptions>
    </PaymentContainer>
  )
}
