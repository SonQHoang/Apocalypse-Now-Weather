import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import Tips from "./components/Tips"
// import ProtectedRoute from "./components/auth/ProtectedRoute"

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
            {/* Example of using protected route */}
            {/* Checks for a logged in user [Front-end protection] */}
            {/* <ProtectedRoute path ="/feed" */}
            {/* <Feed /> */}
          </Route>
          <Route path="/forecast">
            {/* Need to add Forecast Component */}
          </Route>
          <Route path="/stories">
            {/* Need to add Stories Component */}
          </Route>
          <Route path="/tips">
            <Tips/>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;