import { HomeContainer } from './styles'

import { CoffeeList } from './components/CoffeeList'
import { HomeIntro } from './components/HomeIntro'

export function Home() {
  return (
    <HomeContainer>
      <HomeIntro />

      <CoffeeList />
    </HomeContainer>
  )
}
