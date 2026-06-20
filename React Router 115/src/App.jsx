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
      element: <Home/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/about",
      element: <About/>
    },
  ])

  return (
    <>
    {/* <div>Hehe , I am Debss</div> */}
    <Navbar/> 
    <RouterProvider router={router} />
    </>
  )
}

export default App
