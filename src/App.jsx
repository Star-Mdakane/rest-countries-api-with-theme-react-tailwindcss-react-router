import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css'
import RootLayout from './Layouts/RootLayout';
import Home, { countryLoader } from './pages/Home';
import Country from './pages/Country';
import CountryRegion, { regionLoader } from './pages/CountryRegion';
import NotFound from './pages/NotFound';
import HomeLayout from './Layouts/HomeLayout';
import CountriesError from './components/CountriesError';

function App() {

  const router = createBrowserRouter([
    {
      path: '/', Component: RootLayout,
      children: [
        {
          Component: HomeLayout,
          children: [
            { index: true, Component: Home, loader: countryLoader, errorElement: CountriesError },
            { path: 'region/:regionName', Component: CountryRegion, loader: regionLoader }
          ]
        },
        { path: '/country/:code', Component: Country, loader: countryLoader },
      ]
    },
    { path: '*', Component: NotFound }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
