import * as React from 'react'
import styled from 'styled-components'

/**
 * styled
 */
const Container = styled.div`
  background-color: ${(props) => props.theme.colors.blue};
  > p {
    color: ${(props) => props.theme.colors.white};
    padding: 2rem 1rem;
    font-weight: bold;
  }
`

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Container>
      <p>{props.title}</p>
    </Container>
  )
}

export default Header
