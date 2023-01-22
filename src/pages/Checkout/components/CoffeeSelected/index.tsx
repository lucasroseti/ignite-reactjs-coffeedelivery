import { Trash } from 'phosphor-react'
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

interface CoffeeSelectedProps {
  id: number
  source: string
  name: string
  price: string
  quantity: number
}

export function CoffeeSelected({
  id,
  source,
  name,
  price,
  quantity,
}: CoffeeSelectedProps) {
  function handleAmountQuantityChange() {}

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
              <CoffeeSelectedButton>
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
