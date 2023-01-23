import { useFormContext } from 'react-hook-form'
import { MapPinLine } from 'phosphor-react'

import { Title } from '../Title'

import {
  AddressContainer,
  AddressColumn,
  AddressInput,
  AddressInputCustom,
  AddressSection,
} from './styles'

export function Address() {
  const { register } = useFormContext()

  return (
    <AddressContainer>
      <Title
        itemColor="yellow-dark"
        title="Endereço de Entrega"
        subtitle="Informe o endereço onde deseja receber seu pedido"
      >
        <MapPinLine size={22} />
      </Title>

      <AddressSection>
        <AddressColumn>
          <AddressInput
            type="text"
            placeholder="CEP"
            widthInput={12.5}
            {...register('address.zipcode')}
          />
        </AddressColumn>
        <AddressColumn>
          <AddressInput
            type="text"
            placeholder="Rua"
            widthInput={35}
            {...register('address.street')}
          />
        </AddressColumn>
        <AddressColumn>
          <AddressInput
            type="text"
            placeholder="Número"
            widthInput={12.5}
            {...register('address.number')}
          />
          <AddressInputCustom>
            <AddressInput
              type="text"
              placeholder="Complemento"
              widthInput={21.75}
              {...register('address.additional')}
            />
            <span>Opcional</span>
          </AddressInputCustom>
        </AddressColumn>
        <AddressColumn>
          <AddressInput
            type="text"
            placeholder="Bairro"
            widthInput={12.5}
            {...register('address.neighborhood')}
          />
          <AddressInput
            type="text"
            placeholder="Cidade"
            widthInput={17.25}
            {...register('address.city')}
          />
          <AddressInput
            type="text"
            placeholder="UF"
            widthInput={3.75}
            {...register('address.state')}
          />
        </AddressColumn>
      </AddressSection>
    </AddressContainer>
  )
}
