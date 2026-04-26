import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css'
import RootLayout from './Layouts/RootLayout';
import Home from './pages/Home';
import Country from './pages/Country';
import CountryRegion from './pages/CountryRegion';
import NotFound from './pages/NotFound';
import HomeLayout from './Layouts/HomeLayout';

function App() {

  const router = createBrowserRouter([
    {
      path: '/', Component: RootLayout,
      children: [
        {
          Component: HomeLayout,
          children: [
            { index: true, Component: Home },
            { path: 'region/:regionName', Component: CountryRegion }
          ]
        },
        { path: '/country/:code', Component: Country },
      ]
    },
    { path: '*', Component: NotFound }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
