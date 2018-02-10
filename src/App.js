import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components'

import theme from './theme';

import './App.css';

import Header from './Header';

export class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Header></Header>
      </ThemeProvider>
    );
  }
}

export default App;
