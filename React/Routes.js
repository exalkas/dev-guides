/**
 * Task: Setup Routes for your project
 * 
 * ROUTES (for React Router v5)
 * 
 * 1. Create a routes file where you should store all your app routes
 * 2. Insert the routes component in the Main Component (e.g. index.js)
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

// LAYOUTS
import MainLayout from './hoc/main_layout';
import LoginPage from './components/Login_Register/loginPage';

export default function Routes () {
  return(
      <Switch>
        <Route path="somePath" exact><SomeLayout><Route component = {SomeComponent} /></SomeLayout></Route>

        {/* example with a real path */}
        <Route path="/login" exact><MainLayout><Route component = {LoginPage} /></MainLayout></Route>

        {/* 404 page example  */}
        <Route ><SomeLayout><Route component = {PageNotFound}/></SomeLayout></Route> 
        
      </Switch>
  )
}

/**
 * 2. Insert the routes component in the Main Component
 */
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
      <Routes />
  </BrowserRouter>
, document.getElementById('root'));