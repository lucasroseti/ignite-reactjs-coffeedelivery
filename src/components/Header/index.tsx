import { MapPin, ShoppingCart } from 'phosphor-react'

import { Images } from '../../assets'

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
        <img src={Images.LogoCoffeeDeliverySVG} alt="" />
      </HomeLink>

      <nav>
        <LocationMapLink to="/checkout" title="Checkout">
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </LocationMapLink>

        <ShoppingCartLink to="/checkout" title="Checkout">
          <ShoppingCart size={22} weight="fill" />
        </ShoppingCartLink>
      </nav>
    </HeaderContainer>
  )
}
