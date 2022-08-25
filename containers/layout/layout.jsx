import React from 'react'
import { Footer, Header } from '../../components/Static'
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
const Layout = ({ children }) => {
  return (
    <div css={css`min-height: 100%;height:100%;`}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout


