import React, { useState } from 'react'
import styled from 'styled-components'

/**
 * components
 */
import Modal from '../modal/Modal'

/**
 * styled
 */
const Container = styled.div`
  background-color: ${(props) => props.theme.colors.blue};
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem;
  align-items: center;
  > p {
    color: ${(props) => props.theme.colors.white};
    font-weight: bold;
  }
`

const AddButton = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = (props) => {
  const [isModalOpen, setModal] = useState(false)

  function modal() {
    setModal(true)
  }
  return (
    <Container>
      <p>{props.title}</p>
      <AddButton onClick={() => modal()}>追加</AddButton>
      {isModalOpen ? <Modal /> : null}
    </Container>
  )
}

export default Header
