import React from 'react'

import logo from "../../assets/images/logo.svg"
import logoLight from "../../assets/images/logo-light.svg"
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../store/actions'
  
function Navbar() {

  const state = useSelector(state => state.user)
  const dispatch = useDispatch()

  return (
    <header className="navbar-light navbar-sticky header-static">
        {/* <!-- Logo Nav START --> */}
        <nav className="navbar navbar-expand-xl z-index-9">
          <div className="container">
            {/* <!-- Logo START --> */}
            <a className="navbar-brand" href="index-2.html">
              <img className="light-mode-item navbar-brand-item" src={logo} alt="logo" />
              <img className="dark-mode-item navbar-brand-item" src={logoLight} alt="logo" />
            </a>
            {/* <!-- Logo END --> */}

            {/* <!-- Responsive navbar toggler --> */}
            <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-animation">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>

            {/* <!-- Main navbar START --> */}
            <div className="navbar-collapse collapse" id="navbarCollapse">

              {/* <!-- Nav Main menu START --> */}
              <ul className="navbar-nav navbar-nav-scroll ms-auto me-3">
                {/* <!-- Nav item 1 Demos --> */}
                <Link to="/" className="nav-link">Beranda</Link>
                <Link to="/books" className="nav-link">Buku</Link>
                <Link to="/about" className="nav-link">Tentang Kami</Link>              
                                

                {(!state.isLogin) ? (
                  <>
                  <Link to="/sign-in" className="btn btn-primary-soft">Login</Link>
                  <Link to="/courses" className="nav-link">Register</Link>
                  </>
                ) : <Link to="/my-courses" className="nav-link">Buku Saya</Link>}

              </ul>
              {/* <!-- Nav Main menu END --> */}
            </div>
            {/* <!-- Main navbar END --> */}

            {(state.isLogin) ? (
              <>
              {/* <!-- Profile and notification START --> */}
              <ul className="nav flex-row align-items-center list-unstyled ms-xl-auto">
        
                {/* <!--  Add to cart START --> */}
                <li className="nav-item ms-2 dropdown ">
                  {/* <!--  Cart button --> */}
                  <Link to='/cart' className="btn btn-light btn-round mb-0" href="#" role="button" aria-expanded="false" >
                    <i className="bi bi-cart3 fa-fw"></i>
                  </Link>
                  {/* <!--  badge --> */}
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-dark mt-xl-2 ms-n1">2 
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </li>
                {/* <!--  Add to cart END --> */}
        
                {/* <!--  Notification dropdown START --> */}
                <li className="nav-item ms-2 ms-sm-3 dropdown d-none d-sm-block">
                  {/* <!--  Notification button --> */}
                  <a className="btn btn-light btn-round mb-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                    <i className="bi bi-bell fa-fw"></i>
                  </a>
                  {/* <!--  Notification dote --> */}
                  <span className="notif-badge animation-blink"></span>
        
                  {/* <!--  Notification dropdown menu START --> */}
                  <div className="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md p-0 shadow-lg border-0">
                    <div className="card bg-transparent">
                      <div className="card-header bg-transparent border-bottom py-4 d-flex justify-content-between align-items-center">
                        <h6 className="m-0">Notifications <span className="badge bg-danger bg-opacity-10 text-danger ms-2">2 new</span></h6>
                        <a className="small" href="#">Clear all</a>
                      </div>
                      <div className="card-body p-0">
                        <ul className="list-group list-unstyled list-group-flush">
                          {/* <!--  Notif item --> */}
                          <li>
                            <a href="#" className="list-group-item-action border-0 border-bottom d-flex p-3">
                              <div className="me-3">
                                <div className="avatar avatar-md">
                                  <img className="avatar-img rounded-circle" src={require("../../assets/images/avatar/08.jpg")} alt="avatar" />
                                </div>
                              </div>
                              <div>
                                <p className="text-body small m-0">Congratulate <b>Joan Wallace</b> for graduating from <b>Microverse university</b></p>
                                <u className="small">Say congrats</u>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* <!--  Button --> */}
                      <div className="card-footer bg-transparent border-0 py-3 text-center position-relative">
                        <a href="#" className="stretched-link">See all incoming activity</a>
                      </div>
                    </div>
                  </div>
                  {/* <!--  Notification dropdown menu END --> */}
                </li>
                {/* <!--  Notification dropdown END --> */}
        
                {/* <!--  Profile dropdown START --> */}
                <li className="nav-item ms-3 dropdown">
                  {/* <!--  Avatar --> */}
                  <a className="avatar avatar-sm p-0" href="#" id="profileDropdown" role="button" data-bs-auto-close="outside" data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
                    <img className="avatar-img rounded-circle" src={require("../../assets/images/avatar/01.jpg")} alt="avatar" />
                  </a>
        
                  {/* <!--  Profile dropdown START --> */}
                  <ul className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3" aria-labelledby="profileDropdown">
                    {/* <!--  Profile info --> */}
                    <li className="px-3 mb-3">
                      <div className="d-flex align-items-center">
                        {/* <!--  Avatar --> */}
                        <div className="avatar me-3">
                          <img className="avatar-img rounded-circle shadow" src={require("../../assets/images/avatar/01.jpg")} alt="avatar" />
                        </div>
                        <div>
                          <a className="h6" href="#">Lori Ferguson</a>
                          <p className="small m-0">example@gmail.com</p>
                        </div>
                      </div>
                    </li>
                    {/* <!--  Links --> */}
                    <li> <hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#"><i className="bi bi-person fa-fw me-2"></i>Edit Profile</a></li>
                    <li><a className="dropdown-item" href="#"><i className="bi bi-gear fa-fw me-2"></i>Account Settings</a></li>
                    <li><a className="dropdown-item" href="#"><i className="bi bi-info-circle fa-fw me-2"></i>Help</a></li>
                    <li className="dropdown-item bg-danger-soft-hover" onClick={() => dispatch(logout())}><i className="bi bi-power fa-fw me-2"></i>Sign Out</li>
                    
                    {/* <!--  Dark mode switch END --> */}
                  </ul>
                  {/* <!--  Profile dropdown END --> */}
                </li>
              </ul>
              {/* <!--  Profile and notification END --> */}
            </>
                  
            ) 
            : null }
          </div>
        </nav>
        {/* <!-- Logo Nav END --> */}
      </header>
  )
}

export default Navbar