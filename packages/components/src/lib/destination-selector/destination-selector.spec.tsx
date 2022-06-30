import { render } from '@testing-library/react';

import DestinationSelector from './destination-selector';

describe('DestinationSelector', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DestinationSelector />);
    expect(baseElement).toBeTruthy();
  });
});
