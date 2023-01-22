import { ChangeEvent } from 'react'
import { Minus, Plus } from 'phosphor-react'

import { AmountButton, AmountInputContainer, AmountInputInput } from './styles'

interface AmountInputProps {
  quantity: number
  onHandleAmountQuantityChange: (quantity: number) => void
}

export function AmountInput({
  quantity,
  onHandleAmountQuantityChange,
}: AmountInputProps) {
  const minQuantity = 0
  const maxQuantity = 10

  const isSum = true
  const isValueAmountEqualThanZero = quantity === minQuantity
  const isValueAmountEqualThanTen = quantity === maxQuantity

  function handleAmount(isSum: boolean) {
    isSum ? ++quantity : --quantity
    onHandleAmountQuantityChange(quantity)
  }

  function handleAmountChange(event: ChangeEvent<HTMLInputElement>) {
    let quantitySelected = parseInt(event.target.value)
    quantitySelected =
      quantitySelected > maxQuantity ? maxQuantity : quantitySelected

    onHandleAmountQuantityChange(quantitySelected)
  }

  return (
    <AmountInputContainer>
      <AmountButton
        disabled={isValueAmountEqualThanZero}
        onClick={() => handleAmount(!isSum)}
      >
        <Minus size={14} weight="bold" />
      </AmountButton>

      <AmountInputInput
        type="number"
        id="amount"
        placeholder="0"
        step={1}
        min={1}
        max={10}
        value={quantity}
        onChange={handleAmountChange}
      />

      <AmountButton
        disabled={isValueAmountEqualThanTen}
        onClick={() => handleAmount(isSum)}
      >
        <Plus size={14} weight="bold" />
      </AmountButton>
    </AmountInputContainer>
  )
}
