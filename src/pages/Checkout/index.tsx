import { FormEvent } from 'react'

import { Address } from './components/Address'
import { Order } from './components/Order'
import { Payment } from './components/Payment'

import { CheckoutContainer, CheckoutSection } from './styles'

import { CoffeeListImages } from '../../assets'

const order = {
  coffees: [
    {
      source: CoffeeListImages.EspressoSVG,
      name: 'Expresso Tradicional',
      price: '9,90',
    },
    {
      source: CoffeeListImages.LatteSVG,
      name: 'Latte',
      price: 'R$ 19,80',
    },
  ],
  total: {
    items: 29.7,
    delivery: 3.5,
  },
}

export function Checkout() {
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
