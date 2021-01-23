// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react';
import ReactDOM from 'react-dom';
import App from '../react/App';
import store from '../react/store';
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import ScrollHelper from '../react/ScrollHelper';

document.addEventListener('DOMContentLoaded', () => {
  window.store = store;
  ReactDOM.render(
    <Provider store={store}>
      <ScrollHelper>
        <CssBaseline />
        <App />
      </ScrollHelper>
    </Provider>,
    document.body.appendChild(document.createElement('div'))
  );
});
