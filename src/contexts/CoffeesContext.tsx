import { createContext, ReactNode, useReducer } from 'react'

import { alterQuantityCoffeeAction } from '../reducers/coffees/action'

import { Coffee, coffeesReducer } from '../reducers/coffees/reducer'
import { coffeesList } from '../data/coffees'

interface CoffeesContextProviderProps {
  children: ReactNode
}

interface CoffeesContextType {
  coffees: Coffee[]
  alterQuantityCoffee: (id: number, quantity: number) => void
}

export const CoffeesContext = createContext({} as CoffeesContextType)

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffeesState, dispatch] = useReducer(coffeesReducer, {
    coffees: coffeesList,
  })

  const { coffees } = coffeesState

  function alterQuantityCoffee(id: number, quantity: number) {
    dispatch(alterQuantityCoffeeAction(id, quantity))
  }

  return (
    <CoffeesContext.Provider value={{ coffees, alterQuantityCoffee }}>
      {children}
    </CoffeesContext.Provider>
  )
}
