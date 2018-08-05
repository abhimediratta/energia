import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router';

const Icon = styled.div`
  font-size: 1.5em;
  padding: 15px 0;
  margin-left: auto;

  @media screen and (min-width: 40em) {
    display: none;    
  }
`;

class MobileMenuIcon extends Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    this.unlistenRouteChange = this.props.history.listen(() => {
      this.props.showMobileMenu(false);
    });
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    this.unlistenRouteChange();
  }

  handleClickOutside(event) {
    let { wrapperElement } = this.props;
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target) && !wrapperElement.current.contains(event.target)) {
      this.props.showMobileMenu(false);
    }
  }

  render () {
    return (
      <Icon innerRef={this.wrapperRef} onClick={this.props.showMobileMenu}>
        <FontAwesomeIcon icon="bars"/>
      </Icon>
    );
  }
}

export default withRouter(MobileMenuIcon);
