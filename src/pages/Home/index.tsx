import { useContext } from 'react'

import { CoffeesContext } from '../../contexts/CoffeesContext'

import { CoffeeList } from './components/CoffeeList'
import { HomeIntro } from './components/HomeIntro'
import { HomeContainer } from './styles'

export function Home() {
  const { coffees } = useContext(CoffeesContext)

  return (
    <HomeContainer>
      <HomeIntro />

      <CoffeeList coffees={coffees} />
    </HomeContainer>
  )
}
