import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import './index.css';
import Home from './Home'
import Nav from './Nav'
import Store from './Store'
import Detail from './Detail'


ReactDOM.render(


  <Router history={hashHistory}>
    <Route component={Nav}>
      <Route path="/" component={Home} />
      <Route path="/store" component={Store} />
      <Route path="/products/:id" component={Detail} />

    </Route>
  </Router>,

  document.getElementById('root')
);
