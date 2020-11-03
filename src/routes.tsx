import React from 'react'
import HomePage from './pages/HomePage'
import Repositories from './pages/Repositories'
import Contact from './pages/Contact'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

function Routes(){
  return(
    <BrowserRouter>
    <Switch>
      <Route exact path="/"> 
        <HomePage />
      </Route>
      <Route path="/repositories"> 
        <Repositories />
      </Route>
      <Route path="/contact"> 
        <Contact />
      </Route>
      
    </Switch>
  </BrowserRouter>
  );
}

export default Routes;