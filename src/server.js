import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import Attendance from './client/attendance';

module.exports = function render(initialState) {
  const store = configureStore(initialState);
  const preloadedState = store.getState();
  const content = renderToString(
    <Provider store={store} >
       <Attendance />
    </Provider>
  );

  return { content, preloadedState };
}
