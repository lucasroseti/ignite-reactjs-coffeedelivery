import { useContext } from 'react'
import { Trash } from 'phosphor-react'

import { CheckoutContext } from '../../../../contexts/CheckoutContext'
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
  const {
    alterQuantityCoffeeInOrder,
    formatPriceToString,
    removeCoffeeInOrder,
  } = useContext(CheckoutContext)

  const totalPriceCoffeeSelected = formatPriceToString(price * quantity)

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
        <CoffeeSelectedPrice>{totalPriceCoffeeSelected}</CoffeeSelectedPrice>
      </CoffeeSelectedSection>

      <hr />
    </CoffeeSelectedContainer>
  )
}
