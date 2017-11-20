import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import App from './App';
// import SignUp from './SignUp';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<SignUp />, document.getElementById('root'));
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>
    , document.getElementById('root')
  );

registerServiceWorker();
