import React, { Component } from 'react';
import { Flex } from 'grid-styled';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';

import theme from './theme';

import './App.css';

import configureStore from './Store/configureStore';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Sector from './Sector';
import EventOverview from './EventOverview';


const RootContainer = styled(Flex)`
  flex-direction: column;
  min-height: 100vh;
`;

const ContentBox = styled(Flex)`
  background: ${props => props.theme.colors.content.background};
  color: ${props => props.theme.colors.content.color};
  padding: 0 20px 20px 20px;
`;

const store = configureStore();

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <ThemeProvider theme={theme}>
            <RootContainer flexDirection="column">
              <Header></Header>
              <ContentBox flex='1' justify='center'>
                <Flex width={[1, 1, 1, 3/4]}>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path={`/sector/:sectorName`} component={Sector} />
                    <Route path={`/event/:eventSlug`} component={EventOverview} />
                  </Switch>
                </Flex>
              </ContentBox>
              <Footer></Footer>
            </RootContainer>
          </ThemeProvider>
        </Router>
      </Provider>
    );
  }
}

export default App;
