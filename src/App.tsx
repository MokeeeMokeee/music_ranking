import React from 'react'
import * as Theme from './theme/theme'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom'

/*
* components
*/
import TopPage from './components/TopPage'


const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
`

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/">
            <TopPage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
