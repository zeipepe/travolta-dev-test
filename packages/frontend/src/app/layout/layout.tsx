import { Header } from '@travolta-test-dev/components';
import { Link, Outlet } from 'react-router-dom';

/* eslint-disable-next-line */
export interface LayoutProps {}

export function Layout(props: LayoutProps) {
  return (
    <>
      <Header
        navigationElements={[
          <Link to="/">Home</Link>,
          <Link to="destinations">Destinations</Link>,
        ]}
      />
      <Outlet />
    </>
  );
}

export default Layout;
