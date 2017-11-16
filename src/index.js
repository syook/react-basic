import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
// import SignUp from './SignUp';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<SignUp />, document.getElementById('root'));
ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>
    , document.getElementById('root')
  );

registerServiceWorker();
