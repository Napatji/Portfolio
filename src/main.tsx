import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
      createBrowserRouter,
      RouterProvider,
      BrowserRouter } from 'react-router-dom'
import App from './App'
import Profile from './navigate/Profile'
import Achievement from './navigate/Achievement'
import Contact from './navigate/Contact'
import Skill from './navigate/Skill'
import ErrorPage from './navigate/ErrorPage'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/Portfolio/",
    element: <App/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Portfolio/profile",
    element: <Profile/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Portfolio/skill",
    element: <Skill/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Portfolio/achievement",
    element: <Achievement/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Portfolio/contact",
    element: <Contact/>,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
