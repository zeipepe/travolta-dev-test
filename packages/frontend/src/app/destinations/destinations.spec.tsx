import { render } from '@testing-library/react';

import Destinations from './destinations';

describe('Destinations', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Destinations />);
    expect(baseElement).toBeTruthy();
  });
});
