// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import { Route, Routes, Link } from 'react-router-dom';
import { Navigation } from '@travolta-test-dev/components';
import Destinations from './destinations/destinations';
import Home from './home/home';

export function App() {
  return (
    <>
      <Navigation>
          {/* here we could list the navigation elements with <Link/> tags, the design leaves it empty so for now it'll stay like this */}
      </Navigation>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="destinations" element={<Destinations />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
