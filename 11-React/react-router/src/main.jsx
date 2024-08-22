import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { UserPage } from './pages/UserPage'
import { AboutPage } from './pages/AboutPage'
import { MainLayout } from './layout/MainLayout'
import { UserQueryPage } from './pages/UserQueryPage'
import { PostsPage } from './pages/PostsPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h1>Página no encontrada</h1>,
    children: [
      {
        path: "", // pagina principal
        element: <HomePage />
      },
      {
        path: "/user",
        element: <UserPage />
      },
      {
        path: "/user-query/:userId",
        element: <UserQueryPage />
      },
      {
        path: "/posts",
        element: <PostsPage />
      },
      {
        path: "/about",
        element: <AboutPage />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
