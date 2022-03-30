import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'


//import  pages
import {Login, Home, Users, User, Regster, Notpage} from './Page/index'
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
          <Route exact  path="/Users/:id" component={User} />

          <Redirect to='/404' />
        </Switch>
        
      </div>
    )
  }
}
