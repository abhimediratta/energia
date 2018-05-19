import React, { Component } from 'react';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route } from "react-router-dom";

import theme from './theme';

import './App.css';

import Header from './Header';
import Home from './Home';
import Sector from './Sector';
import EventOverview from './EventOverview';

const ContentBox = styled(Flex)`
  background: ${props => props.theme.colors.content.background};
  color: ${props => props.theme.colors.content.color};
  padding: 0 20px 20px 20px;
`;

export class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <Box>
            <Header></Header>
            <ContentBox justify='center'>
              <Flex width={[1, 1, 1, 3/4]}>
                <Route exact path="/" component={Home} />
                <Route path={`/sector/:sectorName`} component={Sector} />
                <Route path={`/event/:eventSlug`} component={EventOverview} />
              </Flex>
            </ContentBox>
          </Box>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
