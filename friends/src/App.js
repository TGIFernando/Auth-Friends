import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css'

import Login from './Components/Login'

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path='/'>
            <h1>Home</h1>
          </Route>
          <Route path='/login' component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
