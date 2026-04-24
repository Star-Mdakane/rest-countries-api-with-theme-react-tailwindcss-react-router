import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css'
// import Header from './components/Header';
import RootLayout from './Layouts/RootLayout';
import Home from './pages/Home';

function App() {

  const router = createBrowserRouter([
    {
      path: '/', Component: RootLayout,
      children: [
        { index: true, Component: Home }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
