
import './App.css'
import MasterLayout from './Component/MasterLayout/MasterLayout'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import Home from './Component/Home/Home';
import About from './Component/About/About'
import Skills from './Component/Skills/Skills'
import Experience from './Component/Experience/Experience'
import Works from './Component/Works/Works'
import Notfound from './Component/Notfound/Notfound';

function App() {
  let routes=createHashRouter([
    {path:'/',element:<MasterLayout/>,
    errorElement:<Notfound/>,
    children:[
      {index:true,element:<Home/>},
      {path:'home',element:<Home/>},
      {path:'about',element:<About/>},
      {path:'skills',element:<Skills/>},
      {path:'experience',element:<Experience/>},
      {path:'works',element:<Works/>}
    ]}
  ]

  )

  return (
    <>
   
    <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
