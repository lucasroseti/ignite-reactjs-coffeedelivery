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
  source: string
  name: string
  price: string
}

export function CoffeeSelected({ source, name, price }: CoffeeSelectedProps) {
  return (
    <CoffeeSelectedContainer>
      <CoffeeSelectedSection>
        <CoffeeSelectedCard>
          <img src={source} alt="" />

          <CoffeeSelectedDetails>
            <span>{name}</span>
            <CoffeeSelectedActions>
              <AmountInput />
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
