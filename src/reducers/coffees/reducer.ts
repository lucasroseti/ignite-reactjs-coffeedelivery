import { produce } from 'immer'

import { ActionTypes } from './action'

export interface Coffee {
  id: number
  source: string
  name: string
  description: string
  tags: string[]
  price: string
  quantity: number
}

interface Total {
  delivery: number
  items: number
}

export interface Order {
  coffees: Coffee[]
  total: Total
}

interface CoffeesState {
  coffees: Coffee[]
  order: Order
}

export function coffeesReducer(state: CoffeesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE_IN_ORDER_ACTION:
      return produce(state, (draft) => {
        draft.order.coffees.push(action.payload.coffee)
      })
    case ActionTypes.ALTER_QUANTITY_COFFEE_ACTION: {
      const coffeeSelectedIndex = state.coffees.findIndex((coffee) => {
        return coffee.id === action.payload.coffeeId
      })

      if (coffeeSelectedIndex < 0) return state
      return produce(state, (draft) => {
        draft.coffees[coffeeSelectedIndex].quantity = action.payload.quantity
      })
    }
    default:
      return state
  }
}
