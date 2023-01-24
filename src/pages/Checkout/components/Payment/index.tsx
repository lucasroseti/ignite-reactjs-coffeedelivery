import { useFormContext } from 'react-hook-form'
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

import { Title } from '../Title'
import { MessageError } from '../../../../components'
import {
  PaymentOptions,
  PaymentContainer,
  PaymentButton,
  PaymentContent,
} from './styles'

export function Payment() {
  const {
    setValue,
    formState: { errors },
  } = useFormContext()

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

      <PaymentContent>
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

        {errors?.payment && (
          <MessageError message={String(errors?.payment?.message)} />
        )}
      </PaymentContent>
    </PaymentContainer>
  )
}
