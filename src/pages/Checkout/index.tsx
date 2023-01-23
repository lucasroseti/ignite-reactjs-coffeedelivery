import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { CoffeesContext } from '../../contexts/CoffeesContext'

import { Address } from './components/Address'
import { Order } from './components/Order'
import { Payment } from './components/Payment'

import { CheckoutContainer, CheckoutSection } from './styles'

const newAddressFormValidationSchema = zod.object({
  address: zod.object({
    zipcode: zod.string().min(7, 'Informe o cep'),
    street: zod.string().min(6, 'Informe a rua'),
    additional: zod.string().optional(),
    number: zod.string().min(2, 'Informe o número'),
    neighborhood: zod.string().min(4, 'Informe o bairro'),
    city: zod.string().min(4, 'Informe a cidade'),
    state: zod.string().min(2, 'Informe o estado'),
  }),
  payment: zod.string(),
})

type NewAddressFormData = zod.infer<typeof newAddressFormValidationSchema>

export function Checkout() {
  const navigate = useNavigate()

  const { order, addClientData } = useContext(CoffeesContext)

  const newAddressForm = useForm<NewAddressFormData>({
    resolver: zodResolver(newAddressFormValidationSchema),
    defaultValues: {
      address: {
        zipcode: '',
        street: '',
        number: '',
        neighborhood: '',
        city: '',
        state: '',
      },
      payment: '',
    },
  })

  const { handleSubmit, reset } = newAddressForm

  function handleFinishOrder(data: NewAddressFormData) {
    console.log(data)
    addClientData(data)
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
            <Payment />
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
