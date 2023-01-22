import { CoffeeSelected } from '../CoffeeSelected'
import { Resume } from '../Resume'

import { OrderButton, OrderContainer, OrderSection } from './styles'

interface CoffeesSelected {
  id: number
  source: string
  name: string
  price: string
  quantity: number
}

interface TotalOrder {
  items: number
  delivery: number
}

interface OrderProps {
  coffeesSelected: CoffeesSelected[]
  totalOrder: TotalOrder
}

export function Order({ coffeesSelected, totalOrder }: OrderProps) {
  return (
    <OrderContainer>
      {coffeesSelected.map((coffeeSelected) => (
        <CoffeeSelected
          key={coffeeSelected.id}
          id={coffeeSelected.id}
          source={coffeeSelected.source}
          name={coffeeSelected.name}
          price={coffeeSelected.price}
          quantity={coffeeSelected.quantity}
        />
      ))}

      <OrderSection>
        <Resume
          totalItems={totalOrder.items}
          totalDelivery={totalOrder.delivery}
        />

        <OrderButton href="/success">Confirmar Pedido</OrderButton>
      </OrderSection>
    </OrderContainer>
  )
}
