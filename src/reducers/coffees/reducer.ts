export interface Coffee {
  id: number
  source: string
  name: string
  description: string
  tags: string[]
  price: string
  quantity: number
}

interface CoffeesState {
  coffees: Coffee[]
}

export function coffeesReducer(state: CoffeesState, action: any) {
  switch (action.type) {
    default:
      return state
  }
}
