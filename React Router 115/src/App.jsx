import './App.css'
import Navbar from './Components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import About from './Components/About'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home/></>
    },
    {
      path: "/login",
      element: <><Navbar /><Login/></>
    },
    {
      path: "/about",
      element: <><Navbar /><About/></>
    },
  ])

  return (
    <>
    {/* <div>Hehe , I am Debss</div> */}
    <RouterProvider router={router} />
    </>
  )
}

export default App
