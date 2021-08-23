import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-f8j5enpj.us.auth0.com"
    clientId="mze3LTF2m4KbyWbaG44Sy4pSPiTJUrX4"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);