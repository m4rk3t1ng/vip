import React, { Component } from "react"
import styled from "@emotion/styled"

import Navbar from "./navbar"
import colors from "../../utils/colors"

const StyledHeader = styled.header`
  width: 100%;
  height: 60px;
  background-color: ${colors.primary};
  position: fixed;
  z-index: 10;
  @media (max-width: 600px) {
    height: 90px;
  }
`

class Header extends Component {

  state = { opacity: 0 };

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);

  }

  componentDidMount() {
    if (this.props.headerOpacity === 1) {
      this.setState({ opacity: 1});
    }
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  
   handleScroll($event) {
    this.setState({ heightSet: document.body.scrollHeight });
    let amount =
      (1 -
        (window.pageYOffset + document.documentElement.clientHeight) / document.documentElement.clientHeight) *
      -1;

    if (amount > 1) {
      amount = 1;
    }

    if (amount < 0) {
      amount = 0;
    }

    if (this.props.headerOpacity) {
      amount += this.props.headerOpacity;
    }

    this.setState({ opacity: amount});
  }

  render() {
    return (
      <StyledHeader id="header-bar" style={{ backgroundColor: `rgba(44,44,44, ${this.state.opacity}` }}>
        <Navbar />
      </StyledHeader>
    )
  }
  
}

export default Header;
