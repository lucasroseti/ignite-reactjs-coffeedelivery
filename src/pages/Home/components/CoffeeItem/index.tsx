import { ShoppingCart } from 'phosphor-react'

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

interface CoffeeItemProps {
  id: number
  source: string
  name: string
  description: string
  tags: string[]
  price: string
  quantity: number
}

export function CoffeeItem({
  id,
  source,
  name,
  description,
  tags,
  price,
  quantity,
}: CoffeeItemProps) {
  function handleAmountQuantityChange() {}

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
          <CoffeePriceValue>{price}</CoffeePriceValue>
        </CoffeePrice>

        <CoffeeActions>
          <AmountInput
            quantity={quantity}
            onHandleAmountQuantityChange={handleAmountQuantityChange}
          />

          <ChartButton>
            <ShoppingCart size={22} weight="fill" />
          </ChartButton>
        </CoffeeActions>
      </CoffeeBuy>
    </CoffeeItemContainer>
  )
}