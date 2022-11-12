import { CoffeeSelected } from '../CoffeeSelected'
import { Resume } from '../Resume'

import { OrderButton, OrderContainer, OrderSection } from './styles'

interface CoffeesSelected {
  source: string
  name: string
  price: string
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
          key={coffeeSelected.name}
          source={coffeeSelected.source}
          name={coffeeSelected.name}
          price={coffeeSelected.price}
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
