import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router'
import AddUser from './components/AddUser.jsx'
import Home from './components/Home.jsx'
import User from './components/User.jsx'
import Userslist from './components/UsersList.jsx'
import Rootlayout from './components/RootLayout.jsx'
function App() {
  const routeObj=createBrowserRouter([
    {
      path:'/',
      element:<Rootlayout />,
      children:[
    {
      path: '',
      element: <Home />,
    },
    {
      path: "userslist",
      element:< Userslist />
    },
    {
      path: "adduser",
      element:<AddUser/>
    },
    {
      path: "user",
      element:<User />
    },
  ]}
    
  ])
  return <RouterProvider router={routeObj} />
}

export default App;