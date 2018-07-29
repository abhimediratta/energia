import React, { Component } from 'react';
import { Flex } from 'grid-styled';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import theme from './theme';

import './App.css';

import configureStore from './Store/configureStore';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Sector from './Sector';
import EventOverview from './EventOverview';
import EventsCalendar from './EventsCalendar';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';


library.add(fas); // adds all font awesome icons

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
            <RootContainer>
              <Header></Header>
              <ContentBox flex='1' justify='center'>
                <Flex flexDirection={['column', 'row']} width={[1, 1, 1, 3/4]}>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path={`/sector/:id`} component={Sector} />
                    <Route path={`/event/:eventSlug`} component={EventOverview} />
                    <Route path={`/events`} component={EventsCalendar} />
                    <Route path={`/about`} component={AboutUs} />
                    <Route path={`/contact`} component={ContactUs} />
                    <Route component={Home} />
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
