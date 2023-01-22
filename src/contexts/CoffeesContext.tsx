import { createContext, ReactNode, useEffect, useReducer } from 'react'

import {
  addCoffeeInOrderAction,
  alterQuantityCoffeeAction,
} from '../reducers/coffees/action'

import { Coffee, coffeesReducer, Order } from '../reducers/coffees/reducer'
import { coffeesList } from '../data/coffees'

interface CoffeesContextProviderProps {
  children: ReactNode
}

interface CoffeesContextType {
  coffees: Coffee[]
  order: Order
  addCoffeeInOrder: (id: number) => void
  alterQuantityCoffee: (id: number, quantity: number) => void
}

export const CoffeesContext = createContext({} as CoffeesContextType)

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const contextInitialize = {
    coffees: coffeesList,
    order: {
      coffees: [],
      total: {
        delivery: 0,
        items: 0,
      },
    },
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

  const { coffees, order } = coffeesState

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeesState)
    localStorage.setItem('@coffeedelivery:coffees-state-1.0.0', stateJSON)
  }, [coffeesState])

  function addCoffeeInOrder(id: number) {
    const coffeeSelected = coffees.find((coffee) => coffee.id === id)

    if (coffeeSelected) {
      dispatch(addCoffeeInOrderAction(coffeeSelected))
    }
  }

  function alterQuantityCoffee(id: number, quantity: number) {
    dispatch(alterQuantityCoffeeAction(id, quantity))
  }

  return (
    <CoffeesContext.Provider
      value={{ coffees, order, addCoffeeInOrder, alterQuantityCoffee }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
