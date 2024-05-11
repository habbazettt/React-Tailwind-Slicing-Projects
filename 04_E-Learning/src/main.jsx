import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Onboard1 from './pages/OnBoard/Onboard1'
import Onboard2 from './pages/OnBoard/Onboard2'
import Onboard3 from './pages/OnBoard/Onboard3'
import Onboard4 from './pages/OnBoard/Onboard4'
import Option from './pages/Option'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import Home from './pages/Home'
import Course from './pages/Course'
import Chat from './pages/Chat'
import Profile from './pages/Profile'
import Notification from './pages/Notification'
import CourseDetails from './pages/CourseDetails'
import PaymentOverview from './pages/Payment/PaymentOverview'
import PaymentMethod from './pages/Payment/PaymentMethod'
import PaymentDetails from './pages/Payment/PaymentDetails'
import PaymentComplete from './pages/Payment/PaymentComplete'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Onboard1 />
  },
  {
    path: '/onboard2',
    element: <Onboard2 />
  },
  {
    path: '/onboard3',
    element: <Onboard3 />
  },
  {
    path: '/onboard4',
    element: <Onboard4 />
  },
  {
    path: '/option',
    element: <Option />
  },
  {
    path: '/signin',
    element: <SignIn />
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/forgotpassword',
    element: <ForgotPassword />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/notification',
    element: <Notification />
  },
  {
    path: '/course',
    element: <Course />
  },
  {
    path: '/course/:id',
    element: <CourseDetails />
  },
  {
    path: '/payment/overview/:id',
    element: <PaymentOverview />
  },
  {
    path: '/payment/method/:id',
    element: <PaymentMethod />
  },
  {
    path: '/payment/details/:id',
    element: <PaymentDetails />
  },
  {
    path: '/payment/complete/:id',
    element: <PaymentComplete />
  },
  {
    path: '/chat',
    element: <Chat />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '*',
    element: <div>404</div>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
