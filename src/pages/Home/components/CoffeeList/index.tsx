import { Coffee } from '../../../../reducers/coffees/reducer'

import { CoffeeItem } from '../CoffeeItem'
import { CoffeeItems, CoffeeListContainer } from './styles'

interface CoffeeListProps {
  coffees: Coffee[]
}

export function CoffeeList({ coffees }: CoffeeListProps) {
  return (
    <CoffeeListContainer>
      <h2>Nossos Cafés</h2>

      <CoffeeItems>
        {coffees.map((coffee) => (
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
