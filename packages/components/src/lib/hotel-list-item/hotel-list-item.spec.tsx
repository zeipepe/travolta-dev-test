import { render } from '@testing-library/react';

import HotelListItem from './hotel-list-item';

describe('HotelListItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HotelListItem />);
    expect(baseElement).toBeTruthy();
  });
});
