import { createContext, ReactNode, useContext, useReducer } from 'react'

import {
  addCoffeeInOrderAction,
  addDataClientInOrderAction,
  alterQuantityCoffeeInOrderAction,
  removeCoffeeInOrderAction,
} from '../reducers/checkout/actions'
import { checkoutReducer, Client, Order } from '../reducers/checkout/reducer'
import { CoffeesContext } from './CoffeesContext'

interface CheckoutContextProviderProps {
  children: ReactNode
}

interface CheckoutContextType {
  client: Client
  order: Order
  addClientDataInOrder: (data: Client) => void
  addCoffeeInOrder: (id: number) => void
  alterQuantityCoffeeInOrder: (id: number, quantity: number) => void
  removeCoffeeInOrder: (id: number) => void
  formatPriceToString: (price: number) => string
}

export const CheckoutContext = createContext({} as CheckoutContextType)

export function CheckoutContextProvider({
  children,
}: CheckoutContextProviderProps) {
  const { coffees } = useContext(CoffeesContext)

  const contextInitialize = {
    client: {
      address: {
        zipcode: '',
        street: '',
        number: '',
        additional: '',
        neighborhood: '',
        city: '',
        state: '',
      },
      payment: '',
    },
    order: {
      coffees: [],
    },
  }

  const [checkoutState, dispatch] = useReducer(
    checkoutReducer,
    contextInitialize,
  )

  const { client, order } = checkoutState

  function addClientDataInOrder(data: Client) {
    dispatch(addDataClientInOrderAction(data))
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

  function formatPriceToString(total: number) {
    if (total === 0) return `R$ 0,00`

    const [valor, cents] = String(total.toFixed(2)).split('.')

    const totalFormat = cents
      ? `R$ ${valor},${cents.padEnd(2, '0')}`
      : `R$ ${valor},00`

    return totalFormat
  }

  return (
    <CheckoutContext.Provider
      value={{
        client,
        order,
        addClientDataInOrder,
        addCoffeeInOrder,
        alterQuantityCoffeeInOrder,
        removeCoffeeInOrder,
        formatPriceToString,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}
