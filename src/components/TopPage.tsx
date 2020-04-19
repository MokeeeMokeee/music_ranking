import * as React from 'react'
import styled from 'styled-components'

/**
 * components
 */
import Header from './header/Header'

interface TopPageProps {}

const TopPage: React.FC<TopPageProps> = () => {
  return (
    <>
      <Header title={'TopPage'} />
      <p>mainPage</p>
    </>
  )
}

export default TopPage
