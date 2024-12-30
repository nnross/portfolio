import { Outlet, useLocation } from 'react-router-dom';
import Header from '/src/components/Header';

export default function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/' && <Header />}
      <Outlet />
    </div>
  );
}