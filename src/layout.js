import * as React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-size: 16px;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    color: #2a2a2a;
  }
`

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      {children}
    </React.Fragment>
  )
}

export default Layout