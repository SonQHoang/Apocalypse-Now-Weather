import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import ApocMap from "./components/ApocWeather/apocmap";
import { Provider } from 'react-redux';
import {store} from './index'
import StoriesComponent from "./components/Stories";
import SingleStoryComponent from "./components/SingleStory";
import CreateNewStory from "./components/CreateNewStory";
import ManageStories from "./components/ManageStories";
import LoginFormModal from "./components/LoginFormModal";import StoryHighlights from './components/StoryHighlights';
import AboutUs from "./components/AboutUs";
import PrepperTypeQuiz from "./components/PrepperTypeQuiz";
import SurvivorProfile from "./components/SurvivorProfile";
import Tips from "./components/Tips"
import TipDetailsPage from "./components/TipDetailsPage/TipDetails";
import ManageTips from "./components/ManageTips";
import SignUpFormModal from "./components/SignupFormModal";


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
          {/* <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route> */}
          <Route path="/forecast">
          <ApocMap/>
          </Route>
          <Route exact path='/stories/manage'>
            <ManageStories />
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
          <Route exact path="/tips">
            <Tips/>
          </Route>

          <Route path="/signup">
            <SignUpFormModal/>
          </Route>

          <Route exact path="/tips/manage">
            <ManageTips/>
          </Route>
          <Route exact path="/tips/:tipId" component={TipDetailsPage} />
          <Route exact path='/'>
            <StoryHighlights />
          </Route>
          <Route exact path='/about-us'>
            <AboutUs />
          </Route>
          <Route exact path='/quiz'>
            <PrepperTypeQuiz />
          </Route>
          <Route exact path='/survivors/current'>
            <SurvivorProfile />
          </Route>
        </Switch>
      )}
    </>
    </Provider>
  );
}

export default App;
