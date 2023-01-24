import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { CheckoutContext } from '../../contexts/CheckoutContext'

import { Detail } from './components/Detail'

import {
  SuccessBorder,
  SuccessContainer,
  SuccessDetails,
  SuccessInfo,
} from './styles'

import { Images } from '../../assets'

const delivery = {
  start: '20',
  end: '30',
}

export function Success() {
  const navigate = useNavigate()
  const { client } = useContext(CheckoutContext)

  useEffect(() => {
    if (client.address.zipcode === '') navigate('/checkout')
  })

  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <h2>Agora é só aguardar que logo o café chegará até você</h2>

      <SuccessInfo>
        <SuccessBorder>
          <SuccessDetails>
            <Detail background="purple" icon="MapPin">
              <p>
                Entrega em{' '}
                <span>
                  {client.address.street}, {client.address.number}
                </span>
              </p>
              <p>
                {client.address.neighborhood} - {client.address.city},{' '}
                {client.address.state}
              </p>
            </Detail>

            <Detail background="yellow" icon="Timer">
              <p>Previsão de entrega</p>
              <span>
                {delivery.start} min - {delivery.end} min
              </span>
            </Detail>

            <Detail background="yellow-dark" icon="CurrencyDollar">
              <p>Pagamento na entrega</p>
              <span>{client.payment}</span>
            </Detail>
          </SuccessDetails>
        </SuccessBorder>

        <img src={Images.CoffeeDriverSVG} alt="" />
      </SuccessInfo>
    </SuccessContainer>
  )
}
