import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { CheckoutContext } from '../../contexts/CheckoutContext'

import { Address } from './components/Address'
import { Order } from './components/Order'
import { Payment } from './components/Payment'

import { CheckoutContainer, CheckoutSection } from './styles'

const newAddressFormValidationSchema = zod.object({
  address: zod.object({
    zipcode: zod.string().min(8, 'Informe o cep'),
    street: zod.string().min(6, 'Informe a rua'),
    additional: zod.string().optional(),
    number: zod.string().min(2, 'Informe o número'),
    neighborhood: zod.string().min(4, 'Informe o bairro'),
    city: zod.string().min(4, 'Informe a cidade'),
    state: zod.string().min(2, 'Informe o estado'),
  }),
  payment: zod.string().min(2, 'Informe o pagamento'),
})

type NewAddressFormData = zod.infer<typeof newAddressFormValidationSchema>

export function Checkout() {
  const navigate = useNavigate()

  const { client, order, addClientDataInOrder } = useContext(CheckoutContext)

  const newAddressForm = useForm<NewAddressFormData>({
    resolver: zodResolver(newAddressFormValidationSchema),
    defaultValues: {
      address: {
        zipcode: client.address.zipcode,
        street: client.address.street,
        number: client.address.number,
        neighborhood: client.address.neighborhood,
        city: client.address.city,
        state: client.address.state,
      },
      payment: client.payment,
    },
  })

  const { handleSubmit, reset } = newAddressForm

  function handleFinishOrder(data: NewAddressFormData) {
    addClientDataInOrder(data)
    navigate('/success')
    reset()
  }

  return (
    <CheckoutContainer>
      <form>
        <CheckoutSection>
          <h2>Complete seu pedido</h2>

          <FormProvider {...newAddressForm}>
            <Address />
            <Payment paymentSelected={client.payment} />
          </FormProvider>
        </CheckoutSection>

        <CheckoutSection>
          <h2>Cafés selecionados</h2>
          <Order
            coffeesSelected={order.coffees}
            onHandleFinishOrder={handleSubmit(handleFinishOrder)}
          />
        </CheckoutSection>
      </form>
    </CheckoutContainer>
  )
}
