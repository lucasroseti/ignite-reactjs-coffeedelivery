import { Coffee } from '../../../../reducers/coffees/reducer'

import { CoffeeSelected } from '../CoffeeSelected'
import { Resume } from '../Resume'

import { OrderButton, OrderContainer, OrderSection } from './styles'

interface CoffeesSelected extends Coffee {}

interface OrderProps {
  coffeesSelected: CoffeesSelected[]
  onHandleFinishOrder: () => void
}

export function Order({ coffeesSelected, onHandleFinishOrder }: OrderProps) {
  const totalDelivery = 8.0

  const isCoffeeSelectedGreaterThanZero = coffeesSelected.length > 0

  function totalItems() {
    const totalItems = coffeesSelected.reduce(function (
      totalItems,
      coffeeSelected,
    ) {
      const totalCoffeeSelected = coffeeSelected.price * coffeeSelected.quantity
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

        {isCoffeeSelectedGreaterThanZero && (
          <OrderButton onClick={onHandleFinishOrder}>
            Confirmar Pedido
          </OrderButton>
        )}
      </OrderSection>
    </OrderContainer>
  )
}
