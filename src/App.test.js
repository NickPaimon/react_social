import React from 'react';
import ReactDOM from 'react-dom';
import AppWithRouterAndProvider from "./App";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppWithRouterAndProvider />, div);
  ReactDOM.unmountComponentAtNode(div);
});