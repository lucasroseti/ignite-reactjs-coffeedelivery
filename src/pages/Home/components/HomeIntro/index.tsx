import { IntroItem } from '../IntroItem'

import { ItemColorBackground } from '../../../../components/IconCustom'

import {
  IntroDescription,
  IntroContainer,
  IntroItems,
  IntroTitle,
} from './styles'

import { Images } from '../../../../assets'

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

export function HomeIntro() {
  return (
    <IntroContainer>
      <IntroDescription>
        <IntroTitle>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
        </IntroTitle>

        <IntroItems>
          {introItems.map((item) => (
            <IntroItem
              key={item.background}
              background={item.background}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </IntroItems>
      </IntroDescription>

      <img src={Images.CoffeeDeliverySVG} alt="" />
    </IntroContainer>
  )
}
