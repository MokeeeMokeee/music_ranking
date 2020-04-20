import React, { useState, useEffect } from 'react'
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

const MainContent = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  width: 70vw;
  height: 50vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const SubmitButton = styled.button`
  color: ${(props) => props.theme.colors.green};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${(props) => props.theme.colors.green};
  border-radius: 3px;
  cursor: pointer;
`

const NotSubmitButton = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const InputContainer = styled.div`
  margin: 1rem 0;
`

const TextContainer = styled.div`
  padding: 1rem 3rem 0 3rem;
  color: ${(props) => props.theme.colors.coral};
`

interface ModalProps {
  setModal: any
}

const Modal: React.FC<ModalProps> = (props) => {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [url, setUrl] = useState('')

  const [isSubmit, setSubmit] = useState(false)

  const handleChange = (event: any) => {
    switch (event.target.name) {
      case 'title':
        setTitle(event.target.value)
        break
      case 'image':
        setImage(event.target.value)
        break
      case 'url':
        setUrl(event.target.value)
        break
      default:
        console.log('key not found')
    }
  }

  useEffect(() => {
    title !== '' && image !== '' && url !== ''
      ? setSubmit(true)
      : setSubmit(false)
  })

  function closeModal() {
    props.setModal(false)
  }

  function submit() {
    console.log(`title: ${title}`)
    console.log(`image: ${image}`)
    console.log(`url: ${url}`)
    setTitle('')
    setImage('')
    setUrl('')
  }

  function checkContent() {
    if (title === '') alert('タイトルを入力してください')
    if (image === '') alert('画像(URL)を入力してください')
    if (url === '') alert('URLを入力してください')
  }

  return (
    <Container>
      <MainContent>
        <TextContainer>
          <p>すべて入力してください。</p>
          <p>間違っても修正しません。</p>
        </TextContainer>
        <FormContainer>
          <InputContainer>
            曲名:
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleChange}
            />
          </InputContainer>
          <InputContainer>
            画像(URL):
            <input
              type="text"
              name="image"
              value={image}
              onChange={handleChange}
            />
          </InputContainer>
          <InputContainer>
            動画URL:
            <input type="text" name="url" value={url} onChange={handleChange} />
          </InputContainer>
        </FormContainer>
        <ButtonContainer>
          <CloseButton onClick={() => closeModal()}>閉じる</CloseButton>
          {isSubmit ? (
            <SubmitButton onClick={() => submit()}>送信</SubmitButton>
          ) : (
            <NotSubmitButton onClick={() => checkContent()}>
              送信
            </NotSubmitButton>
          )}
        </ButtonContainer>
      </MainContent>
    </Container>
  )
}

export default Modal
