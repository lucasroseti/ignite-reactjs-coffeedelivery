export enum ActionTypes {
  ALTER_QUANTITY_COFFEE_ACTION = 'ALTER_QUANTITY_COFFEE_ACTION',
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
