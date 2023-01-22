import { useContext } from 'react'
import { Trash } from 'phosphor-react'

import { CoffeesContext } from '../../../../contexts/CoffeesContext'
import { Coffee } from '../../../../reducers/coffees/reducer'

import { AmountInput } from '../../../../components'

import {
  CoffeeSelectedContainer,
  CoffeeSelectedPrice,
  CoffeeSelectedButton,
  CoffeeSelectedActions,
  CoffeeSelectedDetails,
  CoffeeSelectedSection,
  CoffeeSelectedCard,
} from './styles'

interface CoffeeSelectedProps extends Coffee {}

export function CoffeeSelected({
  id,
  source,
  name,
  price,
  quantity,
}: CoffeeSelectedProps) {
  const { alterQuantityCoffeeInOrder, removeCoffeeInOrder } =
    useContext(CoffeesContext)

  function handleAmountQuantityChange(quantity: number) {
    alterQuantityCoffeeInOrder(id, quantity)
  }

  function handleRemoveCoffeeInOrder() {
    removeCoffeeInOrder(id)
  }
  return (
    <CoffeeSelectedContainer>
      <CoffeeSelectedSection>
        <CoffeeSelectedCard>
          <img src={source} alt="" />

          <CoffeeSelectedDetails>
            <span>{name}</span>
            <CoffeeSelectedActions>
              <AmountInput
                quantity={quantity}
                onHandleAmountQuantityChange={handleAmountQuantityChange}
              />
              <CoffeeSelectedButton onClick={handleRemoveCoffeeInOrder}>
                <Trash size={16} />
                Remover
              </CoffeeSelectedButton>
            </CoffeeSelectedActions>
          </CoffeeSelectedDetails>
        </CoffeeSelectedCard>
        <CoffeeSelectedPrice>{price}</CoffeeSelectedPrice>
      </CoffeeSelectedSection>

      <hr />
    </CoffeeSelectedContainer>
  )
}
