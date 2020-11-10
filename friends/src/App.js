import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import PrivateRoute from './Components/PrivateRoute'
import './App.css'

import Login from './Components/Login'
import FriendsList from './Components/FriendsList'
import AddFriend from './Components/AddFriend'

function App() {

  const logOut = () => localStorage.removeItem("token");

  return (
    <Router>
      <div className="App">
        <header>
          <Link to="/login">Login</Link>
          <Link to="#" onClick={logOut}>Log Out</Link>
          <Link to="/friends">Friends List</Link>
        </header>

        <Switch>
          <Route exact path='/'>
            <h1>Home</h1>
          </Route>
          <Route path="/login" render={(props)=>{
            return <Login {...props}/>
          }} />
          <PrivateRoute exact path='/friends' component={FriendsList}/>
          <PrivateRoute exact path ='/addfriend' component={AddFriend}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
