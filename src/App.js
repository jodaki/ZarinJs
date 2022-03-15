import React, { Component } from 'react'
import { Route, Link, Redirect, Switch } from 'react-router-dom'
// pages
import Home from './Page/Home'
import Users from './Page/Users'
import Notpage from './Page/Notpage'
import Login from './Page/Login'
import Regster from './Page/Regster'
import Navbar from './layout/Navbar'
export default class App extends Component {
  render() {
    return (
      <div>
        
        <Navbar />
        <Switch>
          <Route exact  path="/" component={Home}/>
          <Route exact  path="/Users" component={Users}/>
          <Route exact  path="/login" component={Login}/>
          <Route exact  path="/regster" component={Regster}/>
          <Route exact  path="/404" component={Notpage}/>
          <Redirect to='/404' />
        </Switch>
        
      </div>
    )
  }
}
