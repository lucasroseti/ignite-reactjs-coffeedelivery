import { Coffee } from '../../../../reducers/coffees/reducer'

import { CoffeeSelected } from '../CoffeeSelected'
import { Resume } from '../Resume'

import { OrderButton, OrderContainer, OrderSection } from './styles'

interface CoffeesSelected extends Coffee {}

interface OrderProps {
  coffeesSelected: CoffeesSelected[]
}

export function Order({ coffeesSelected }: OrderProps) {
  const totalDelivery = 8.0

  function totalItems() {
    const totalItems = coffeesSelected.reduce(function (
      totalItems,
      coffeeSelected,
    ) {
      const coffeeSelectedPrice = parseFloat(
        coffeeSelected.price.replace(',', '.'),
      )
      const totalCoffeeSelected = coffeeSelectedPrice * coffeeSelected.quantity
      return totalItems + totalCoffeeSelected
    },
    0)

    return parseFloat(totalItems.toFixed(2))
  }

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
        <Resume totalItems={totalItems()} totalDelivery={totalDelivery} />

        <OrderButton href="/success">Confirmar Pedido</OrderButton>
      </OrderSection>
    </OrderContainer>
  )
}
