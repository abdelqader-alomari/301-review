import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './Header.css';
import Login from './Login'
class Header extends React.Component {
  render() {
    return (
      <>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Login />
          <Navbar.Brand>Colors</Navbar.Brand>
          <Link to="/">Home</Link>
          <Link to="/favColors">Favorites</Link>
          <Link to="/profile">Profile</Link>
          {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}
        </Navbar>
      </>
    );
  }
}

export default Header;
