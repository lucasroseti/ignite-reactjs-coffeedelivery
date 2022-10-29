import { ItemColorBackground, HomeItem } from './components/HomeItem'

import { HomeContainer, HomeIntro, HomeItems, HomeTitle } from './styles'

import CoffeeDeliverySVG from '../../assets/coffee-delivery.svg'

interface IntroItemProps {
  background: ItemColorBackground
  description: string
  icon: string
}

const introItems: IntroItemProps[] = [
  {
    background: 'yellow-dark',
    description: 'Compra simples e segura',
    icon: 'ShoppingCart',
  },
  {
    background: 'gray',
    description: 'Embalagem mantém o café intacto',
    icon: 'Package',
  },
  {
    background: 'yellow',
    description: 'Entrega rápida e rastreada',
    icon: 'Timer',
  },
  {
    background: 'purple',
    description: 'O café chega fresquinho até você',
    icon: 'Coffee',
  },
]

export function Home() {
  return (
    <HomeContainer>
      <HomeIntro>
        <HomeTitle>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
        </HomeTitle>

        <HomeItems>
          {introItems.map((item) => (
            <HomeItem
              key={item.background}
              background={item.background}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </HomeItems>
      </HomeIntro>

      <img src={CoffeeDeliverySVG} alt="" />
    </HomeContainer>
  )
}
