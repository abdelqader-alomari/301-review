import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Colors from './Colors';
import FavColors from './FavColors'
import Login from './Login'
import Logout from './Logout'
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Login />
              <Logout />
              <Colors />
              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
            </Route>

            <Route path="/favColors">
              {isAuthenticated && (
                <>
                  <Logout />
                  <FavColors />
                </>
              )}
            </Route>


          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
