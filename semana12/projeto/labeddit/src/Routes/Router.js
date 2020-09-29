import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FeedPage from "../Screens/Feed/FeedPage"
import LoginPage from "../Screens/LoginPage/LoginPage"
import SignupPage from "../Screens/SignupPage/SignupPage"
import PostPage from "../Screens/PostPage/PostPage"


 const Router = () => {
   return(
    <BrowserRouter>
    <Switch>
      <Route exact path={'/login'}>
        <LoginPage/>
      </Route>
    </Switch>
    <Switch>
      <Route exact path={'/cadastro'}>
        <SignupPage/>
      </Route>
    </Switch>
    <Switch>
      <Route exact path={'/post/:id'}>
        <PostPage/>
      </Route>
    </Switch>
    <Switch>
      <Route exact path={'/feed'}>
        <FeedPage/>
      </Route>
    </Switch>
  </BrowserRouter>

   )

}
export default Router