import { Client, Coffee } from './reducer'

export enum ActionTypes {
  ADD_DATA_CLIENT_ACTION = 'ADD_DATA_CLIENT_ACTION',

  ADD_COFFEE_IN_ORDER_ACTION = 'ADD_COFFEE_IN_ORDER_ACTION',
  ALTER_QUANTITY_COFFEE_IN_ORDER_ACTION = 'ALTER_QUANTITY_COFFEE_IN_ORDER_ACTION',
  REMOVE_COFFEE_IN_ORDER_ACTION = 'REMOVE_COFFEE_IN_ORDER_ACTION',

  ALTER_QUANTITY_COFFEE_ACTION = 'ALTER_QUANTITY_COFFEE_ACTION',
}

export function addDataClientAction(client: Client) {
  return {
    type: ActionTypes.ADD_DATA_CLIENT_ACTION,
    payload: {
      client,
    },
  }
}

export function addCoffeeInOrderAction(coffee: Coffee) {
  return {
    type: ActionTypes.ADD_COFFEE_IN_ORDER_ACTION,
    payload: {
      coffee,
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

export function alterQuantityCoffeeAction(coffeeId: number, quantity: number) {
  return {
    type: ActionTypes.ALTER_QUANTITY_COFFEE_ACTION,
    payload: {
      coffeeId,
      quantity,
    },
  }
}
