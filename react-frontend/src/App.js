import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import StoryComments from "./components/StoryComments";
import ApocMap from "./components/ApocWeather/apocmap";
import { Provider } from 'react-redux';
import {store} from './index'
import StoriesComponent from "./components/Stories";
import SingleStoryComponent from "./components/SingleStory";
import CreateNewStory from "./components/CreateNewStory";

import Tips from "./components/Tips"

// import ProtectedRoute from "./components/auth/ProtectedRoute"

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <Provider store={store}>  {/* Now the store is defined */}
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/forecast">
           <ApocMap/>
          </Route>
          <Route path='/stories/new'>
            <CreateNewStory />
          </Route>
          <Route path='/stories/:id'>
            <SingleStoryComponent />
          </Route>
          <Route path="/stories">
            <StoriesComponent />
          </Route>
          <Route path="/tips">
            <Tips/>
          </Route>

          {/* <Route path="/signup">
            <SignupFormPage></SignupFormPage>
          </Route> */}

        </Switch>
      )}
    </>
    </Provider>
  );
}

export default App;
