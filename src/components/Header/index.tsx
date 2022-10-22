import { MapPin, ShoppingCart } from 'phosphor-react'

import LogoCoffeeDeliverySVG from '../../assets/logo-coffee-delivery.svg'
import {
  HeaderContainer,
  HomeLink,
  LocationMapLink,
  ShoppingCartLink,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HomeLink to="/" title="Home">
        <img src={LogoCoffeeDeliverySVG} alt="" />
      </HomeLink>

      <nav>
        <LocationMapLink to="/checkout" title="Checkout">
          <MapPin size={24} weight="fill" />
          Porto Alegre, RS
        </LocationMapLink>

        <ShoppingCartLink to="/checkout" title="Checkout">
          <ShoppingCart size={24} weight="fill" />
        </ShoppingCartLink>
      </nav>
    </HeaderContainer>
  )
}
