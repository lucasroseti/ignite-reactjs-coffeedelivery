import { produce } from 'immer'

import { ActionTypes } from './action'

export interface Address {
  zipcode: string
  street: string
  number: string
  neighborhood: string
  city: string
  state: string
}

export interface Client {
  address: Address
  payment: string
}

export interface Coffee {
  id: number
  source: string
  name: string
  description?: string
  tags?: string[]
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
  client: Client
}

export function coffeesReducer(state: CoffeesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_DATA_CLIENT_ACTION:
      return produce(state, (draft) => {
        draft.client = action.payload.client
      })
    case ActionTypes.ADD_COFFEE_IN_ORDER_ACTION:
      return produce(state, (draft) => {
        draft.order.coffees.push(action.payload.coffee)
      })
    case ActionTypes.REMOVE_COFFEE_IN_ORDER_ACTION: {
      const coffeeSelectedIndex = state.order.coffees.findIndex((coffee) => {
        return coffee.id === action.payload.coffeeId
      })

      if (coffeeSelectedIndex < 0) return state

      return produce(state, (draft) => {
        draft.order.coffees.splice(coffeeSelectedIndex, 1)
      })
    }
    case ActionTypes.ALTER_QUANTITY_COFFEE_IN_ORDER_ACTION: {
      const coffeeInOrderSelectedIndex = state.order.coffees.findIndex(
        (coffee) => {
          return coffee.id === action.payload.coffeeId
        },
      )

      if (coffeeInOrderSelectedIndex < 0) return state
      return produce(state, (draft) => {
        draft.order.coffees[coffeeInOrderSelectedIndex].quantity =
          action.payload.quantity
      })
    }
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
