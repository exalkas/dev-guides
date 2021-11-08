# Routes

### Steps:

1. Create a routes file where you should store all your app routes
2. Insert the routes component in the Main Component

```

import React from 'react';
import { Switch, Route } from 'react-router-dom';

// LAYOUTS
import MainLayout from './hoc/main_layout';
import LoginPage from './components/Login_Register/loginPage';

export default const Routes = () => {
  return(
      <Switch>
        <Route path="somePath" exact><SomeLayout><Route component = {SomeComponent} /></SomeLayout></Route>

        // e.g.
        <Route path="/login" exact><MainLayout><Route component = {LoginPage} /></MainLayout></Route>

        <Route ><SomeLayout><Route component = {PageNotFound}/></SomeLayout></Route> 
        
      </Switch>
  )
}

```