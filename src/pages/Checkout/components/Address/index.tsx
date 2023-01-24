import { useFormContext } from 'react-hook-form'
import { MapPinLine } from 'phosphor-react'

import { Title } from '../Title'
import { MessageError } from '../../../../components'
import {
  AddressContainer,
  AddressColumn,
  AddressInput,
  AddressInputCustom,
  AddressSection,
  AddressMessageSection,
} from './styles'

export function Address() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const { address } = errors

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
        <div>
          <AddressColumn>
            <AddressInput
              type="text"
              placeholder="CEP"
              widthInput={12.5}
              {...register('address.zipcode')}
            />
          </AddressColumn>
          {address?.zipcode?.message && (
            <MessageError message={String(address?.zipcode?.message)} />
          )}
        </div>

        <div>
          <AddressColumn>
            <AddressInput
              type="text"
              placeholder="Rua"
              widthInput={35}
              {...register('address.street')}
            />
          </AddressColumn>
          {address?.street?.message && (
            <MessageError message={String(address?.street?.message)} />
          )}
        </div>

        <div>
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
          {address?.number?.message && (
            <MessageError message={String(address?.number?.message)} />
          )}
        </div>
        <div>
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
          <AddressMessageSection>
            {address?.neighborhood?.message && (
              <MessageError message={String(address?.neighborhood?.message)} />
            )}
            {address?.city?.message && (
              <MessageError message={String(address?.city?.message)} />
            )}
            {address?.state?.message && (
              <MessageError message={String(address?.state?.message)} />
            )}
          </AddressMessageSection>
        </div>
      </AddressSection>
    </AddressContainer>
  )
}
