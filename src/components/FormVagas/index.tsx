import React, { FormEvent, useState } from 'react'
import styled from 'styled-components'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormStyled onSubmit={aoEnviarForm}>
      <InputStyled
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
        className="campo"
      />
      <ButtonStyled type="submit" className="btnPesquisar">
        Pesquisar
      </ButtonStyled>
    </FormStyled>
  )
}

export default FormVagas

/* Styled Components para o componente FormVagas */

const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const InputStyled = styled.input`
  flex: 1;
  padding: 8px;
  font-size: 16px;
  border: 1px solid var(--cor-principal);
  border-radius: 4px;
  margin-right: 16px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`

const ButtonStyled = styled.button`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`
