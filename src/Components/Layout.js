import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../Styles/GlobalStyle';
import Navbar from './Navbar';
import Footer from './Footer';

const theme = {};

const Layout = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />
        <Navbar />
        <main className='main-container'>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default Layout