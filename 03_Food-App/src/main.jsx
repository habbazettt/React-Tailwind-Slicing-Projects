import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home.jsx'
import Details from './Details.jsx'
import Checkout from './Checkout.jsx'
import Complete from './Complete.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Error</div>,
  },
  {
    path: '/home',
    element: <Home />,
    errorElement: <div>Error</div>,
  },
  {
    path: '/details',
    element: <Details />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
  {
    path: '/complete',
    element: <Complete />
  },
  {
    path: '*',
    element: <div>Error</div>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
