import { render } from '@testing-library/react';

import HotelSearch from './hotel-search';

describe('HotelSearch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HotelSearch />);
    expect(baseElement).toBeTruthy();
  });
});
