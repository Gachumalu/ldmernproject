import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../App';
import './navbar.css'

const Navbar = () => {

  const { state, dispatch } = useContext(UserContext);
  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <li className="nav-item">
            <Link className="nav-link  text-center" aria-current="page" to="/">Home</Link>
          </li>

          <li className="nav-item ">
            <Link className="nav-link text-center" to="/about">About</Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link text-center" to="/contact">Contact</Link>
          </li>

          <li className="nav-item  ">
            <Link className="nav-link text-center" to="/logout">Logout</Link>
          </li>
        </>
      )
    }
    else {
      return (
        <>
          <li className="nav-item">
            <Link className="nav-link  text-center" aria-current="page" to="/">Home</Link>
          </li>

          <li className="nav-item ">
            <Link className="nav-link text-center" to="/about">About</Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link text-center" to="/contact">Contact</Link>
          </li>
          <li className="nav-item  ">
            <Link className="nav-link text-center" to="/signin">Login</Link>
          </li>

          <li className="nav-item  ">
            <Link className="nav-link text-center" to="/signup">Registration</Link>
          </li>

        </>
      )

    }

  }

  return (
    <>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark ">
        <div className="container text-uppercase ps-2">
          <Link className="navbar-brand nav-link" to="/" >L&D <span className='navlogo'>infotech</span></Link>
          <button className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className='toggler-icon top-bar'></span>
            <span className='toggler-icon middle-bar'></span>
            <span className='toggler-icon bottom-bar'></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">



              <RenderMenu />





            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar