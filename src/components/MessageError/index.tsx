import { MessageErrorContainer } from './styles'

interface MessageErrorProps {
  message: string
}

export function MessageError({ message }: MessageErrorProps) {
  return <MessageErrorContainer>{message}</MessageErrorContainer>
}
