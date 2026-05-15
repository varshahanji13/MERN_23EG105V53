import React from 'react'
import { NavLink } from 'react-router'
function Header() {
  return (
    <div className='flex justify-between bg-blue-300 p-5 px-10 items-center '>
      <img className='rounded-lg' width="80px" 
       src='https://static.vecteezy.com/system/resources/previews/025/869/623/non_2x/round-profile-image-of-woman-avatar-for-social-networks-fashion-beauty-blue-and-black-bright-illustration-in-trendy-style-free-vector.jpg' alt=''
      ></img>
      
    <nav>
        <ul className='flex justify-end gap-10 font-semibold  '>
            <li>
                <NavLink to="/" className={({isActive})=>isActive ? "text-blue-500": " "}>Home
                </NavLink>

            </li>
            <li>
                <NavLink to="/userlist" className={({isActive})=>isActive ? "text-blue-500": " "}>UserList
                </NavLink>

            </li>
              <li>
                <NavLink to="/adduser" className={({isActive})=>isActive ? "text-blue-500": " "}>AddUser
                </NavLink>

              </li>
        </ul>
    </nav>
    </div>
  )
}

export default Header