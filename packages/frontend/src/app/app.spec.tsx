import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';

import { BrowserRouter, Router } from 'react-router-dom';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(baseElement).toBeTruthy();
  });

  it('should have the main text', () => {
    const history = createMemoryHistory();
    const route = '/';
    history.push(route)
    const { getByText } = render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );

    expect(getByText(/We love to travel as much as you do/gi)).toBeTruthy();
  });
});
