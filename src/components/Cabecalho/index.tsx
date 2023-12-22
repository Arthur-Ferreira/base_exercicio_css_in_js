import React from 'react'
import styled from 'styled-components'

// Componente Cabecalho que exibe o título "EBAC Jobs"
const Cabecalho = () => (
  <Header>
    <h1>EBAC Jobs</h1>
  </Header>
)

export default Cabecalho

/* Styled Components para o componente Cabecalho */

const Header = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
`
