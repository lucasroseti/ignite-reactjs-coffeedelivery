import { useState } from 'react'
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

interface PaymentProps {
  paymentSelected: string
}

export function Payment({ paymentSelected }: PaymentProps) {
  const {
    setValue,
    formState: { errors },
  } = useFormContext()
  const [isPaymentSelected, setIsPaymentSelected] = useState(false)

  const isPaymentCredit = paymentSelected === 'Cartão de crédito'
  const isPaymentDebit = paymentSelected === 'Cartão de débito'
  const isPaymentMoney = paymentSelected === 'Dinheiro'

  function handlePaymentSelected(typePayment: string) {
    setValue('payment', typePayment)
    setIsPaymentSelected(true)
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
            autoFocus={isPaymentCredit}
            onClick={() => handlePaymentSelected('Cartão de crédito')}
          >
            <CreditCard size={16} /> Cartão de crédito
          </PaymentButton>
          <PaymentButton
            type="button"
            autoFocus={isPaymentDebit}
            onClick={() => handlePaymentSelected('Cartão de débito')}
          >
            <Bank size={16} /> Cartão de débito
          </PaymentButton>
          <PaymentButton
            type="button"
            autoFocus={isPaymentMoney}
            onClick={() => handlePaymentSelected('Dinheiro')}
          >
            <Money size={16} /> Dinheiro
          </PaymentButton>
        </PaymentOptions>

        {!isPaymentSelected && errors.payment && (
          <MessageError message={String(errors?.payment?.message)} />
        )}
      </PaymentContent>
    </PaymentContainer>
  )
}
