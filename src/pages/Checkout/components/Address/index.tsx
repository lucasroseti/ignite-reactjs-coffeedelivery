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
          <AddressInput type="text" placeholder="CEP" widthInput={12.5} />
        </AddressColumn>
        <AddressColumn>
          <AddressInput type="text" placeholder="Rua" widthInput={35} />
        </AddressColumn>
        <AddressColumn>
          <AddressInput type="text" placeholder="Número" widthInput={12.5} />
          <AddressInputCustom>
            <AddressInput
              type="text"
              placeholder="Complemento"
              widthInput={21.75}
            />
            <span>Opcional</span>
          </AddressInputCustom>
        </AddressColumn>
        <AddressColumn>
          <AddressInput type="text" placeholder="Bairro" widthInput={12.5} />
          <AddressInput type="text" placeholder="Cidade" widthInput={17.25} />
          <AddressInput type="text" placeholder="UF" widthInput={3.75} />
        </AddressColumn>
      </AddressSection>
    </AddressContainer>
  )
}
