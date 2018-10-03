import React from 'react';
import {
  Container,
  Menu,
} from 'semantic-ui-react';

const navbarStyle = {
  paddingBottom: '3.5em',
};

const Navbar = () => (
  <div>
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
          State Minimization
        </Menu.Item>
      </Container>
    </Menu>
    <div style={navbarStyle} />
  </div>

);

export default Navbar;
