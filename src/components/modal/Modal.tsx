import * as React from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'

/**
 * styled
 */
const Container = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => rgba(props.theme.colors.black, 0.3)};
`

const CloseButton = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`

interface ModalProps {
  setModal: any
}

const Modal: React.FC<ModalProps> = (props) => {
  function closeModal() {
    props.setModal(false)
  }
  return (
    <Container>
      <p>open</p>
      <CloseButton onClick={() => closeModal()}>閉じる</CloseButton>
    </Container>
  )
}

export default Modal
