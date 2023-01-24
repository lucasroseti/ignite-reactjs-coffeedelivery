import { produce } from 'immer'

import { Coffee } from '../coffees/reducer'

import { ActionTypes } from './actions'

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

export interface Order {
  coffees: Coffee[]
}

interface CheckoutState {
  order: Order
  client: Client
}

export function checkoutReducer(state: CheckoutState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_DATA_CLIENT_IN_ORDER_ACTION:
      return produce(state, (draft) => {
        draft.client = action.payload.client
      })
    case ActionTypes.ADD_COFFEE_IN_ORDER_ACTION: {
      const coffeeInOrderSelectedIndex = state.order.coffees.findIndex(
        (coffee) => {
          return coffee.id === action.payload.coffee.id
        },
      )

      if (coffeeInOrderSelectedIndex < 0)
        return produce(state, (draft) => {
          draft.order.coffees.push(action.payload.coffee)
        })

      return produce(state, (draft) => {
        draft.order.coffees[coffeeInOrderSelectedIndex].quantity =
          action.payload.coffee.quantity
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
    case ActionTypes.REMOVE_COFFEE_IN_ORDER_ACTION: {
      const coffeeSelectedIndex = state.order.coffees.findIndex((coffee) => {
        return coffee.id === action.payload.coffeeId
      })

      if (coffeeSelectedIndex < 0) return state

      return produce(state, (draft) => {
        draft.order.coffees.splice(coffeeSelectedIndex, 1)
      })
    }
    default:
      return state
  }
}
