import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "../home/HomePage";
import RegisterForm from "../RegisterForm";
import AdminPage from "../admin/AdminPage";


/** Site-wide routes.
 *
 * Parts of site should only be visitable when logged in. Those routes are
 * wrapped by <PrivateRoute>, which is an authorization component.
 *
 * Visiting a non-existant route redirects to the homepage.
 */

function Routes({ login, signup }) {
  console.debug(
      "Routes"
  );

  return (
      <div className="pt-5">
        <Switch>

          <Route exact path="/">
            <Homepage />
          </Route>

          <Route exact path="/register">
            <RegisterForm/>
          </Route>

          <Route exact path="/admin">
            <AdminPage/>
          </Route>

          <Redirect to="/" />
        </Switch>
      </div>
  );
}

export default Routes;
