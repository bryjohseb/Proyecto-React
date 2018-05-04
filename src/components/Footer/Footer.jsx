import React from 'react';
import { Nav, NavItem} from 'react-bootstrap'

const Footer = () => (
    <Nav bsStyle="pills">
    <NavItem eventKey={1} href="/">
      Home
    </NavItem>
    <NavItem eventKey={2} href="/About">
      About
    </NavItem>
    <NavItem eventKey={3}>
      Contact Us
    </NavItem>
  </Nav>
);

export default Footer;