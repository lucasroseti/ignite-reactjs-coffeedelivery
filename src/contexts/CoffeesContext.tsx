import { createContext, ReactNode, useEffect, useReducer } from 'react'

import {
  addCoffeeInOrderAction,
  addDataClientAction,
  alterQuantityCoffeeAction,
  alterQuantityCoffeeInOrderAction,
  removeCoffeeInOrderAction,
} from '../reducers/coffees/action'

import {
  Client,
  Coffee,
  coffeesReducer,
  Order,
} from '../reducers/coffees/reducer'
import { coffeesList } from '../data/coffees'

interface CoffeesContextProviderProps {
  children: ReactNode
}

interface CoffeesContextType {
  client: Client
  coffees: Coffee[]
  order: Order
  addClientData: (data: Client) => void
  addCoffeeInOrder: (id: number) => void
  alterQuantityCoffeeInOrder: (id: number, quantity: number) => void
  removeCoffeeInOrder: (id: number) => void
  alterQuantityCoffee: (id: number, quantity: number) => void
  formatPriceToString: (price: number) => string
}

export const CoffeesContext = createContext({} as CoffeesContextType)

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const contextInitialize = {
    client: {
      address: {},
      payment: '',
    },
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

  const { client, coffees, order } = coffeesState

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeesState)
    localStorage.setItem('@coffeedelivery:coffees-state-1.0.0', stateJSON)
  }, [coffeesState])

  function addClientData(data: Client) {
    dispatch(addDataClientAction(data))
  }

  function addCoffeeInOrder(id: number) {
    const coffeeSelected = coffees.find((coffee) => coffee.id === id)

    if (coffeeSelected) {
      dispatch(addCoffeeInOrderAction(coffeeSelected))
    }
  }

  function alterQuantityCoffeeInOrder(id: number, quantity: number) {
    dispatch(alterQuantityCoffeeInOrderAction(id, quantity))
  }

  function removeCoffeeInOrder(id: number) {
    dispatch(removeCoffeeInOrderAction(id))
  }

  function alterQuantityCoffee(id: number, quantity: number) {
    dispatch(alterQuantityCoffeeAction(id, quantity))
  }

  function formatPriceToString(total: number) {
    if (total === 0) return `R$ 0,00`

    const [valor, cents] = String(total.toFixed(2)).split('.')

    const totalFormat = cents
      ? `R$ ${valor},${cents.padEnd(2, '0')}`
      : `R$ ${valor},00`

    return totalFormat
  }

  return (
    <CoffeesContext.Provider
      value={{
        client,
        coffees,
        order,
        addClientData,
        addCoffeeInOrder,
        alterQuantityCoffeeInOrder,
        removeCoffeeInOrder,
        alterQuantityCoffee,
        formatPriceToString,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
