import React, { createContext, useReducer } from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './componets/About'
import Contact from './componets/Contact'
import Home from './componets/Home'
import Navbar from './componets/Navbar'
import Signin from './componets/Signin'
import Signup from './componets/Signup'
import Logout from './componets/Logout'
import Cpractical1 from './notes/Cpractical1'

import { initialState,reducer } from './reducer/UseReducer'

import './App.css'
// import Cpractical1 from './notes/Cpractical1'

//  contextAPI
export const UserContext = createContext();

const App = () => {

 const[state,dispatch]= useReducer(reducer,initialState)

  return (
    <>
     
 
      <UserContext.Provider value={{state,dispatch}}>

      
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/cpractice1" element={<Cpractical1 />} />
      </Routes>
 
      </UserContext.Provider>
  
    </>
  )
}

export default App