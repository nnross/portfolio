import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Disciplines from './pages/disciplines';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{
      index: true,
      element: <Home />,
    },
    {
      path: 'about',
      element: <About />,
    },
    {
      path: 'projects',
      element: <Projects />,
    },
    {
      path: 'disciplines',
      element: <Disciplines />,
    },
    {
      path: '*',
      element: <About />,
    }
  ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
