import { Coffee } from './reducer'

export enum ActionTypes {
  ADD_COFFEE_IN_ORDER_ACTION = 'ADD_COFFEE_IN_ORDER_ACTION',
  ALTER_QUANTITY_COFFEE_ACTION = 'ALTER_QUANTITY_COFFEE_ACTION',
}

export function addCoffeeInOrderAction(coffee: Coffee) {
  return {
    type: ActionTypes.ADD_COFFEE_IN_ORDER_ACTION,
    payload: {
      coffee,
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
