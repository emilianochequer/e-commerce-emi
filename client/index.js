import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import RouteHook from 'react-route-hook';
import store from './react/store';
import { Provider } from 'react-redux';
import '../public/js/bootstrap.min.js';
import { checkUserSession } from './react/action-creator/user';
import { fetchSearchProducts } from './react/action-creator/products';
// import './styles/index.css';
import App from './react/components/App';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const onAppEnter = () => {
  store.dispatch(checkUserSession());
  store.dispatch(fetchSearchProducts());
};

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <RouteHook
        path="/"
        component={App}
        onEnter={onAppEnter}
        onChange={onAppEnter}
      />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
