import { render } from '@testing-library/react';

import PeopleAndRoomsSelector from './people-and-rooms-selector';

describe('PeopleAndRoomsSelector', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PeopleAndRoomsSelector />);
    expect(baseElement).toBeTruthy();
  });
});
