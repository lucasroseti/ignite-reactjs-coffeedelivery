import { Minus, Plus } from 'phosphor-react'

import { AmountButton, AmountInputContainer, AmountInputInput } from './styles'

export function AmountInput() {
  return (
    <AmountInputContainer>
      <AmountButton>
        <Minus size={14} weight="bold" />
      </AmountButton>

      <AmountInputInput
        type="number"
        id="amount"
        placeholder="1"
        step={1}
        min={1}
        max={10}
      />

      <AmountButton>
        <Plus size={14} weight="bold" />
      </AmountButton>
    </AmountInputContainer>
  )
}
