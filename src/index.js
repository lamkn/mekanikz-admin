import React from 'react'
import ReactDOM from 'react-dom'
import Login from './components/Login/Login'
import { HashRouter, Switch, Route } from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

ReactDOM.render((
  <HashRouter>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login } />
    </Switch>
  </HashRouter>
), document.getElementById('root'));