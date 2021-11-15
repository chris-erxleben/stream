import '@fontsource/open-sans'
import '../../styles/style.css'

import * as React from 'react'
import { FunctionComponent } from 'react'
import styled from 'styled-components'
import LeftNav from './left-nav'
import TopBar from './top-bar'

interface Props {
  uri: string
}

export const NavWrapper = styled.div`
  display: flex;
  flex-flow: row;
  height: 100vh;
  width: 100vw;
`

export const BarWrapper = styled.div`
  background-color: white;
  flex: 1 0 auto;
`

const Layout: FunctionComponent<Props> = ({ children, uri }) => (
  <NavWrapper>
    <LeftNav currentUri={uri} />
    <BarWrapper>
      <TopBar />
      {children}
    </BarWrapper>
  </NavWrapper>
)

export default Layout
