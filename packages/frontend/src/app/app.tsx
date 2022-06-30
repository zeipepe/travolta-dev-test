// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes } from 'react-router-dom';
import Destinations from './destinations/destinations';
import Home from './home/home';
import Layout from './layout/layout';

export function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="*" element={<Home />} />
          <Route path="destinations" element={<Destinations />} />
        </Route>
      </Routes>
  );
}

export default App;
