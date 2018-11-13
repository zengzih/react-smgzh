import React, {Fragment, Component, createRef} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';

import './style/common.less';

import Start from './page/start';
import Home from './page/home';
import appointManage from './page/appointmanage';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path='/' component={Start}></Route>
      <Route path='/home' component={Home}></Route>
      <Route path='/appointmanage' component={appointManage}></Route>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
// if (module.hot) module.hot.accept('./App', () => render(App));
