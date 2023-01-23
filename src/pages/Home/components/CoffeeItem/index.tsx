import { useContext } from 'react'
import { ShoppingCart } from 'phosphor-react'

import { CoffeesContext } from '../../../../contexts/CoffeesContext'
import { Coffee } from '../../../../reducers/coffees/reducer'

import { AmountInput } from '../../../../components'

import {
  ChartButton,
  CoffeeActions,
  CoffeeBuy,
  CoffeeItemContainer,
  CoffeePrice,
  CoffeePriceSymbol,
  CoffeePriceValue,
  CoffeeTags,
} from './styles'

interface CoffeeItemProps extends Coffee {}

export function CoffeeItem({
  id,
  source,
  name,
  description,
  tags = [],
  price,
  quantity,
}: CoffeeItemProps) {
  const { addCoffeeInOrder, alterQuantityCoffee } = useContext(CoffeesContext)

  const isQuantityEqualThanZero = quantity === 0
  const priceFormatToString = String(price).replace('.', ',')

  function handleAddCoffeeInOrder(id: number) {
    addCoffeeInOrder(id)
  }

  function handleAmountQuantityChange(quantity: number) {
    alterQuantityCoffee(id, quantity)
  }

  return (
    <CoffeeItemContainer>
      <img src={source} alt="" />

      <CoffeeTags>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </CoffeeTags>

      <h3>{name}</h3>

      <h4>{description}</h4>

      <CoffeeBuy>
        <CoffeePrice>
          <CoffeePriceSymbol>R$</CoffeePriceSymbol>
          <CoffeePriceValue>{priceFormatToString}</CoffeePriceValue>
        </CoffeePrice>

        <CoffeeActions>
          <AmountInput
            quantity={quantity}
            onHandleAmountQuantityChange={handleAmountQuantityChange}
          />

          <ChartButton
            disabled={isQuantityEqualThanZero}
            onClick={() => handleAddCoffeeInOrder(id)}
          >
            <ShoppingCart size={22} weight="fill" />
          </ChartButton>
        </CoffeeActions>
      </CoffeeBuy>
    </CoffeeItemContainer>
  )
}
