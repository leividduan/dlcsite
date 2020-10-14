import React from 'react';
import HomePage from './pages/HomePage'
import About from './pages/About'
import Info from './pages/Info'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route exact path="/"> 
            <HomePage />
          </Route>
          <Route path="/about"> 
            <About />
          </Route>
          <Route path="/info"> 
            <Info />
          </Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
