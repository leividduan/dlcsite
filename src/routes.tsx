import React from 'react'
import HomePage from './pages/HomePage'
import Repositories from './pages/Repositories'
import Info from './pages/Info'
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
      <Route path="/info"> 
        <Info />
      </Route>
      
    </Switch>
  </BrowserRouter>
  );
}

export default Routes;