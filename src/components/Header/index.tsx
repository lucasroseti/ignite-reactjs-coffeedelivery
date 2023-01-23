import { useContext } from 'react'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { CoffeesContext } from '../../contexts/CoffeesContext'

import { Images } from '../../assets'

import {
  HeaderContainer,
  HomeLink,
  LocationMapLink,
  ShoppingCartCounter,
  ShoppingCartLink,
  ShoppingCartSection,
} from './styles'

export function Header() {
  const { client, order } = useContext(CoffeesContext)

  const countOfCoffeesSelected = order.coffees.length

  return (
    <HeaderContainer>
      <HomeLink to="/" title="Home">
        <img src={Images.LogoCoffeeDeliverySVG} alt="" />
      </HomeLink>

      <nav>
        <LocationMapLink to="/checkout" title="Checkout">
          <MapPin size={22} weight="fill" />
          {client.address.city &&
            `${client.address.city}, ${client.address.state}`}
        </LocationMapLink>

        <ShoppingCartSection>
          <ShoppingCartLink to="/checkout" title="Checkout">
            <ShoppingCart size={22} weight="fill" />
          </ShoppingCartLink>

          {countOfCoffeesSelected > 0 && (
            <ShoppingCartCounter>
              <span>{countOfCoffeesSelected}</span>
            </ShoppingCartCounter>
          )}
        </ShoppingCartSection>
      </nav>
    </HeaderContainer>
  )
}
