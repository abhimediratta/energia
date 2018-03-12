import React, { Component } from 'react';
import { Box } from 'grid-styled';
import { ThemeProvider } from 'styled-components'

import theme from './theme';

import './App.css';

import Header from './Header';
import Content from './Content';

export class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Box>
          <Header></Header>
          <Content></Content>
        </Box>
      </ThemeProvider>
    );
  }
}

export default App;
