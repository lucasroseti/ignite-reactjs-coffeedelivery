import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { CheckoutContextProvider, CoffeesContextProvider } from './contexts'

import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeesContextProvider>
          <CheckoutContextProvider>
            <Router />
          </CheckoutContextProvider>
        </CoffeesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
