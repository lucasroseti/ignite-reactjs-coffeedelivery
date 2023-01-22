import { coffeesList } from '../../../../data/coffees'

import { CoffeeItem } from '../CoffeeItem'

import { CoffeeItems, CoffeeListContainer } from './styles'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos Cafés</h2>

      <CoffeeItems>
        {coffeesList.map((coffee) => (
          <CoffeeItem
            key={coffee.id}
            id={coffee.id}
            source={coffee.source}
            name={coffee.name}
            description={coffee.description}
            tags={coffee.tags}
            price={coffee.price}
            quantity={coffee.quantity}
          />
        ))}
      </CoffeeItems>
    </CoffeeListContainer>
  )
}
