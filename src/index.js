import React from 'react'
import ReactDOM from 'react-dom'
import Login from './components/Login/Login'
import './styles/index.scss';
import { HashRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'

ReactDOM.render((
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </Switch>
  </HashRouter>
), document.getElementById('root'));