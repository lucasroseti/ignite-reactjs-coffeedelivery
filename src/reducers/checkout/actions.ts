import { Client } from './reducer'
import { Coffee } from '../coffees/reducer'

export enum ActionTypes {
  ADD_DATA_CLIENT_IN_ORDER_ACTION = 'ADD_DATA_CLIENT_IN_ORDER_ACTION',

  ADD_COFFEE_IN_ORDER_ACTION = 'ADD_COFFEE_IN_ORDER_ACTION',
  ALTER_QUANTITY_COFFEE_IN_ORDER_ACTION = 'ALTER_QUANTITY_COFFEE_IN_ORDER_ACTION',
  REMOVE_COFFEE_IN_ORDER_ACTION = 'REMOVE_COFFEE_IN_ORDER_ACTION',
}

export function addCoffeeInOrderAction(coffee: Coffee) {
  return {
    type: ActionTypes.ADD_COFFEE_IN_ORDER_ACTION,
    payload: {
      coffee,
    },
  }
}

export function addDataClientInOrderAction(client: Client) {
  return {
    type: ActionTypes.ADD_DATA_CLIENT_IN_ORDER_ACTION,
    payload: {
      client,
    },
  }
}

export function alterQuantityCoffeeInOrderAction(
  coffeeId: number,
  quantity: number,
) {
  return {
    type: ActionTypes.ALTER_QUANTITY_COFFEE_IN_ORDER_ACTION,
    payload: {
      coffeeId,
      quantity,
    },
  }
}

export function removeCoffeeInOrderAction(coffeeId: number) {
  return {
    type: ActionTypes.REMOVE_COFFEE_IN_ORDER_ACTION,
    payload: {
      coffeeId,
    },
  }
}
