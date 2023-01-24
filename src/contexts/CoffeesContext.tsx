import { createContext, ReactNode, useEffect, useReducer } from 'react'

import { alterQuantityCoffeeAction } from '../reducers/coffees/actions'
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
  const contextInitialize = {
    coffees: coffeesList,
  }

  const [coffeesState, dispatch] = useReducer(
    coffeesReducer,
    contextInitialize,
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffeedelivery:coffees-state-1.0.0',
      )

      if (storedStateAsJSON) return JSON.parse(storedStateAsJSON)

      return contextInitialize
    },
  )

  const { coffees } = coffeesState

  useEffect(() => {
    const stateJSON = JSON.stringify({ coffees: coffeesList })
    localStorage.setItem('@coffeedelivery:coffees-state-1.0.0', stateJSON)
  }, [])

  function alterQuantityCoffee(id: number, quantity: number) {
    dispatch(alterQuantityCoffeeAction(id, quantity))
  }

  return (
    <CoffeesContext.Provider value={{ coffees, alterQuantityCoffee }}>
      {children}
    </CoffeesContext.Provider>
  )
}
