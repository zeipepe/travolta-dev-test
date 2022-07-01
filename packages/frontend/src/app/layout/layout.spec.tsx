import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Layout from './layout';

describe('Layout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
