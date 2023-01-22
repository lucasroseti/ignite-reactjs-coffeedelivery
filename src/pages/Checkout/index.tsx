import { FormEvent, useContext } from 'react'

import { CoffeesContext } from '../../contexts/CoffeesContext'

import { Address } from './components/Address'
import { Order } from './components/Order'
import { Payment } from './components/Payment'

import { CheckoutContainer, CheckoutSection } from './styles'

export function Checkout() {
  const { order } = useContext(CoffeesContext)

  function handleFinishOrder(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleFinishOrder}>
        <CheckoutSection>
          <h2>Complete seu pedido</h2>

          <Address />
          <Payment />
        </CheckoutSection>

        <CheckoutSection>
          <h2>Cafés selecionados</h2>
          <Order coffeesSelected={order.coffees} totalOrder={order.total} />
        </CheckoutSection>
      </form>
    </CheckoutContainer>
  )
}
