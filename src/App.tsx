import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

// Global styles using createGlobalStyle from styled-components
const GlobalStyle = createGlobalStyle`
  :root {
    --cor-principal: #a7727d;
    --cor-secundaria: #f9f5e7;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Lato, sans-serif;
    list-style: none;
  }

  body {
    padding-bottom: 120px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

  @media (max-width: 1024px) {
    .container {
      max-width: 80%;
    }
  }
`

const AppContainer = styled.div`
  /* Add any additional styling if needed */
`

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <Hero />
        <div className="container">
          <ListaVagas />
        </div>
      </AppContainer>
    </>
  )
}

export default App
