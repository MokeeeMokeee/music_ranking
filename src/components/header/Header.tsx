import * as React from 'react'
import styled from 'styled-components'

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <p>{props.title}</p>
    </>
  )
}

export default Header
