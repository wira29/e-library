import React from 'react'

import logo from "../../assets/images/logo.svg"
import logoLight from "../../assets/images/logo-light.svg"

function Navbar() {
  return (
    <header className="navbar-light navbar-sticky header-static">
        {/* <!-- Logo Nav START --> */}
        <nav className="navbar navbar-expand-xl">
          <div className="container-fluid px-3 px-xl-5">
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
            <div className="navbar-collapse w-100 collapse" id="navbarCollapse">

              {/* <!-- Nav category menu START --> */}
              <ul className="navbar-nav navbar-nav-scroll me-auto">
                {/* <!-- Nav item 1 Demos --> */}
                <li className="nav-item dropdown dropdown-menu-shadow-stacked">
                  <a className="nav-link bg-primary bg-opacity-10 rounded-3 text-primary px-3 py-3 py-xl-0" href="#" id="categoryMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="bi bi-ui-radios-grid me-2"></i><span>Category</span></a>
                  <ul className="dropdown-menu" aria-labelledby="categoryMenu">

                    {/* <!-- Dropdown submenu --> */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">Development</a>
                      <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                        {/* <!-- dropdown submenu open right --> */}
                        <li className="dropdown-submenu dropend">
                          <a className="dropdown-item dropdown-toggle" href="#">Web Development</a>
                          <ul className="dropdown-menu" data-bs-popper="none">
                            <li> <a className="dropdown-item" href="#">CSS</a> </li>
                            <li> <a className="dropdown-item" href="#">JavaScript</a> </li>
                            <li> <a className="dropdown-item" href="#">Angular</a> </li>
                            <li> <a className="dropdown-item" href="#">PHP</a> </li>
                            <li> <a className="dropdown-item" href="#">HTML</a> </li>
                            <li> <a className="dropdown-item" href="#">React</a> </li>
                          </ul>
                        </li>
                        <li> <a className="dropdown-item" href="#">Data Science</a> </li>
                        <li> <a className="dropdown-item" href="#">Mobile Development</a> </li>
                        <li> <a className="dropdown-item" href="#">Programing Language</a> </li>
                        <li> <a className="dropdown-item" href="#">Software Testing</a> </li>
                        <li> <a className="dropdown-item" href="#">Software Engineering</a> </li>
                        <li> <a className="dropdown-item" href="#">Software Development Tools</a> </li>
                      </ul>
                    </li>
                    <li> <a className="dropdown-item" href="#">Design</a></li>
                    {/* <!-- Dropdown submenu --> */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">Marketing</a>
                      <div className="dropdown-menu dropdown-menu-start dropdown-width-lg" data-bs-popper="none">
                        <div className="row p-4">
                          {/* <!-- Dropdown column item --> */}
                          <div className="col-xl-6 col-xxl-4 mb-4 mb-xl-0">
                            <h6 className="mb-0">Get started</h6>
                            {/* <hr> <!-- Divider --> */}
                            <ul className="list-unstyled">
                              <li> <a className="dropdown-item" href="#">Market Research</a> </li>
                              <li> <a className="dropdown-item" href="#">Advertising</a> </li>
                              <li> <a className="dropdown-item" href="#">Consumer Behavior</a> </li>
                              <li> <a className="dropdown-item" href="#">Digital Marketing</a> </li>
                              <li> <a className="dropdown-item" href="#">Marketing Ethics</a> </li>
                              <li> <a className="dropdown-item" href="#">Social Media Marketing</a> </li>
                              <li> <a className="dropdown-item" href="#">Public Relations</a> </li>
                              <li> <a className="dropdown-item" href="#">Advertising</a> </li>
                              <li> <a className="dropdown-item" href="#">Decision Science</a> </li>
                              <li> <a className="dropdown-item" href="#">SEO</a> </li>
                              <li> <a className="dropdown-item" href="#">Business Marketing</a> </li>
                            </ul>
                          </div>

                          {/* <!-- Dropdown column item --> */}
                          <div className="col-xl-6 col-xxl-4 mb-4 mb-xl-0">
                            <h6 className="mb-0">Degree</h6>
                            {/* <hr> <!-- Divider --> */}
                            {/* <!-- Dropdown item --> */}
                            <div className="d-flex mb-4 position-relative">
                              <img src={require("../../assets/images/client/uni-logo-01.svg")} className="icon-md" alt="" />
                              <div className="ms-3">
                                <a className="stretched-link h6 mb-0" href="#">American Century University, New Mexico</a>
                                <p className="mb-0 small">Bachelor of computer science</p>
                              </div>
                            </div>
                            {/* <!-- Dropdown item --> */}
                            <div className="d-flex mb-4 position-relative">
                              <img src={require("../../assets/images/client/uni-logo-02.svg")} className="icon-md" alt="" />
                              <div className="ms-3">
                                <a className="stretched-link h6 mb-0" href="#">Indiana College of - Bloomington</a>
                                <p className="mb-0 small">Masters of computer science</p>
                              </div>
                            </div>
                            {/* <!-- Dropdown item --> */}
                            <div className="d-flex mb-4 position-relative">
                              <img src={require("../../assets/images/client/uni-logo-03.svg")} className="icon-md" alt="" />
                              <div className="ms-3">
                                <a className="stretched-link h6 mb-0" href="#">College of South Florida</a>
                                <p className="mb-0 small">Medical science college</p>
                              </div>
                            </div>
                            {/* <!-- Dropdown item --> */}
                            <div className="d-flex mb-4 position-relative">
                              <img src={require("../../assets/images/client/uni-logo-01.svg")} className="icon-md" alt=""/>
                              <div className="ms-3">
                                <a className="stretched-link h6 mb-0" href="#">Andeerson Campus</a>
                                <p className="mb-0 small">Bachelor of computer science</p>
                              </div>
                            </div>
                            {/* <!-- Dropdown item --> */}
                            <div className="d-flex position-relative">
                              <img src={require("../../assets/images/client/uni-logo-04.svg")} className="icon-md" alt=""/>
                              <div className="ms-3">
                                <a className="stretched-link h6 mb-0" href="#">University of South California</a>
                                <p className="mb-0 small">Masters of business development</p>
                              </div>
                            </div>
                          </div>

                          {/* <!-- Dropdown column item --> */}
                          <div className="col-xl-6 col-xxl-4">
                            <h6 className="mb-0">Certificate</h6>
                            {/* <hr> <!-- Divider --> */}
                            {/* <!-- Dropdown item --> */}
                            <div className="d-flex mb-4 position-relative">
                              <h2 className="mb-0"><i className="fab fa-fw fa-google text-google-icon"></i></h2>
                              <div className="ms-2">
                                <a className="stretched-link h6 mb-0" href="#">Google SEO certificate</a>
                                <p className="mb-0 small">No prerequisites</p>
                              </div>
                            </div>
                            {/* <!-- Dropdown item --> */}
                            <div className="d-flex mb-4 position-relative">
                              <h2 className="mb-0"><i className="fab fa-fw fa-linkedin-in text-linkedin"></i></h2>
                              <div className="ms-2">
                                <a className="stretched-link h6 mb-0" href="#">Business Development Executive(BDE)</a>
                                <p className="mb-0 small">No prerequisites</p>
                              </div>
                            </div>
                            {/* <!-- Dropdown item --> */}
                            <div className="d-flex mb-4 position-relative">
                              <h2 className="mb-0"><i className="fab fa-fw fa-facebook text-facebook"></i></h2>
                              <div className="ms-2">
                                <a className="stretched-link h6 mb-0" href="#">Facebook social media marketing</a>
                                <p className="mb-0 small">Expert advice</p>
                              </div>
                            </div>
                            {/* <!-- Dropdown item --> */}
                            <div className="d-flex mb-4 position-relative">
                              <h2 className="mb-0"><i className="fas fa-fw fa-basketball-ball text-dribbble"></i></h2>
                              <div className="ms-2">
                                <a className="stretched-link h6 mb-0" href="#">Creative graphics design</a>
                                <p className="mb-0 small">No prerequisites</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* <!-- Advertisement --> */}
                        <div className="row">
                          <div className="col-12">
                            <div className="card bg-blue rounded-0 rounded-bottom p-3 position-relative overflow-hidden" style={{ background:'url(assets/images/pattern/05.png) no-repeat center center', backgroundSize:'cover' }}>
                              {/* <!-- SVG decoration --> */}
                              <figure className="position-absolute bottom-0 end-0 mb-n4 d-none d-md-block">
                                <svg width="92.6px" height="135.2px">	
                                  <path className="fill-white" d="M71.5,131.4c0.2,0.1,0.4,0.1,0.6-0.1c0,0,0.6-0.7,1.6-1.9c0.2-0.2,0.1-0.5-0.1-0.7c-0.2-0.2-0.5-0.1-0.7,0.1 c-1,1.2-1.6,1.8-1.6,1.8c-0.2,0.2-0.2,0.5,0,0.7C71.4,131.3,71.4,131.4,71.5,131.4z"></path>
                                  <path className="fill-white" d="M76,125.5c-0.2-0.2-0.3-0.5-0.1-0.7c1-1.4,1.9-2.8,2.8-4.2c0.1-0.2,0.4-0.3,0.7-0.2c0.2,0.1,0.3,0.4,0.2,0.7 c-0.9,1.4-1.8,2.9-2.8,4.2C76.6,125.6,76.3,125.6,76,125.5C76.1,125.5,76.1,125.5,76,125.5z M81.4,116.9 c-0.2-0.1-0.3-0.4-0.2-0.7c0.2-0.5,0.5-0.9,0.7-1.4c0.5-1.1,1-2.1,1.5-3.2c0.1-0.3,0.4-0.4,0.6-0.3c0.3,0.1,0.4,0.4,0.3,0.6 c-0.5,1.1-1,2.1-1.5,3.2c-0.2,0.5-0.5,0.9-0.7,1.4C81.9,117,81.6,117,81.4,116.9C81.4,116.9,81.4,116.9,81.4,116.9z M85.1,107.1 c0.5-1.6,1-3.2,1.3-4.8c0.1-0.3,0.3-0.4,0.6-0.4c0.3,0.1,0.4,0.3,0.4,0.6c-0.4,1.6-0.8,3.3-1.3,4.9c-0.1,0.3-0.4,0.4-0.6,0.3 c0,0,0,0-0.1,0C85.1,107.6,85,107.3,85.1,107.1z M47.3,83c-1.5-1.1-2.5-2.5-3.1-4.2c-0.1-0.3,0-0.5,0.3-0.6 c0.3-0.1,0.5,0,0.6,0.3c0.5,1.5,1.5,2.7,2.8,3.7c0.2,0.2,0.3,0.5,0.1,0.7C47.9,83.1,47.6,83.1,47.3,83C47.4,83,47.4,83,47.3,83z  M51.7,84.6c0-0.3,0.3-0.5,0.5-0.4c1.4,0.2,2.9-0.3,4.3-1.4c0.2-0.2,0.5-0.1,0.7,0.1c0.2,0.2,0.1,0.5-0.1,0.7 c-1.6,1.2-3.4,1.8-5,1.6c-0.1,0-0.1,0-0.2,0C51.8,85,51.7,84.8,51.7,84.6z M87.2,97.4c0.2-1.7,0.2-3.3,0.2-5 c0-0.3,0.2-0.5,0.5-0.5c0.3,0,0.5,0.2,0.5,0.5c0.1,1.7,0,3.4-0.2,5.1c0,0.3-0.3,0.5-0.5,0.4c-0.1,0-0.1,0-0.2,0 C87.3,97.8,87.1,97.6,87.2,97.4z M43.7,73.6c0.2-1.6,0.7-3.2,1.5-4.8l0.1-0.1c0.1-0.2,0.4-0.3,0.7-0.2c0,0,0,0,0,0 c0.2,0.1,0.3,0.4,0.2,0.7l-0.1,0.1c-0.7,1.5-1.2,3-1.4,4.5c0,0.3-0.3,0.5-0.6,0.4c-0.1,0-0.1,0-0.2,0 C43.8,74,43.7,73.8,43.7,73.6z M60,79.8c-0.2-0.1-0.3-0.5-0.1-0.7c0.4-0.6,0.8-1.3,1.1-2c0.4-0.8,0.7-1.6,1-2.4 c0.1-0.3,0.4-0.4,0.6-0.3c0.3,0.1,0.4,0.4,0.3,0.6c-0.3,0.9-0.7,1.7-1.1,2.5c-0.4,0.7-0.8,1.4-1.2,2.1C60.5,79.9,60.2,80,60,79.8 C60,79.9,60,79.8,60,79.8z M86.8,87.5c-0.3-1.6-0.7-3.2-1.2-4.8c-0.1-0.3,0.1-0.5,0.3-0.6c0.3-0.1,0.5,0.1,0.6,0.3 c0.5,1.6,1,3.3,1.2,4.9c0,0.3-0.1,0.5-0.4,0.6c-0.1,0-0.2,0-0.3,0C87,87.7,86.9,87.6,86.8,87.5z M48.2,65.1 c-0.2-0.2-0.2-0.5,0-0.7c1.2-1.3,2.5-2.4,3.9-3.4c0.2-0.1,0.5-0.1,0.7,0.1c0.1,0.2,0.1,0.5-0.1,0.7c-1.4,0.9-2.6,2-3.7,3.2 c-0.2,0.2-0.4,0.2-0.6,0.1C48.3,65.2,48.3,65.1,48.2,65.1z M63.3,70c0.3-1.6,0.5-3.3,0.5-4.9c0-0.3,0.2-0.5,0.5-0.5 c0.3,0,0.5,0.2,0.5,0.5c-0.1,1.7-0.2,3.4-0.5,5.1c0,0.3-0.3,0.4-0.6,0.4c0,0-0.1,0-0.1,0C63.3,70.4,63.2,70.2,63.3,70z M83.8,78 c-0.7-1.5-1.5-3-2.4-4.3c-0.1-0.2-0.1-0.5,0.1-0.7c0.2-0.1,0.5-0.1,0.7,0.2c0.9,1.4,1.7,2.9,2.5,4.4c0.1,0.2,0,0.5-0.2,0.7 c-0.1,0.1-0.3,0.1-0.4,0C83.9,78.2,83.8,78.1,83.8,78z M56.5,59.6c-0.1-0.3,0.1-0.5,0.4-0.6c1.7-0.4,3.4-0.5,5.2-0.3 c0.3,0,0.5,0.3,0.4,0.5c0,0.3-0.3,0.5-0.5,0.4c-1.7-0.2-3.3-0.1-4.8,0.3c-0.1,0-0.2,0-0.3,0C56.6,59.8,56.5,59.7,56.5,59.6z  M78.4,69.7c-1.1-1.3-2.2-2.5-3.4-3.6c-0.2-0.2-0.2-0.5,0-0.7c0.2-0.2,0.5-0.2,0.7,0c1.2,1.1,2.4,2.4,3.5,3.7 c0.2,0.2,0.1,0.5-0.1,0.7c-0.2,0.1-0.4,0.1-0.5,0.1C78.5,69.8,78.4,69.7,78.4,69.7z M63.6,60.1c-0.2-1.6-0.4-3.3-0.8-4.9 c-0.1-0.3,0.1-0.5,0.4-0.6c0.3-0.1,0.5,0.1,0.6,0.4c0.4,1.7,0.7,3.4,0.8,5c0,0.3-0.2,0.5-0.4,0.5c-0.1,0-0.2,0-0.3,0 C63.7,60.4,63.6,60.2,63.6,60.1z M71,63.1c-1.4-0.9-2.9-1.7-4.4-2.3c-0.3-0.1-0.4-0.4-0.3-0.6c0.1-0.3,0.4-0.4,0.6-0.3 c1.5,0.6,3.1,1.4,4.6,2.3c0.2,0.1,0.3,0.5,0.1,0.7C71.6,63.1,71.3,63.2,71,63.1C71.1,63.1,71.1,63.1,71,63.1z M61.3,50.4 c-0.6-1.5-1.3-3-2.1-4.5c-0.1-0.2-0.1-0.5,0.2-0.7c0.2-0.1,0.5-0.1,0.7,0.2c0.9,1.5,1.6,3.1,2.2,4.6c0.1,0.3,0,0.5-0.3,0.6 c-0.1,0.1-0.3,0-0.4,0C61.5,50.6,61.4,50.5,61.3,50.4z M56.5,41.8c-1-1.3-2.1-2.6-3.2-3.8c-0.2-0.2-0.2-0.5,0-0.7 c0.2-0.2,0.5-0.2,0.7,0c1.2,1.3,2.3,2.6,3.3,3.9c0.2,0.2,0.1,0.5-0.1,0.7c-0.2,0.1-0.4,0.1-0.5,0C56.6,41.9,56.5,41.8,56.5,41.8z  M49.7,34.5c-1.2-1.1-2.5-2.1-3.9-3.2c-0.2-0.2-0.3-0.5-0.1-0.7c0.2-0.2,0.5-0.3,0.7-0.1c1.4,1,2.7,2.1,3.9,3.2 c0.2,0.2,0.2,0.5,0,0.7c-0.2,0.2-0.4,0.2-0.6,0.1C49.7,34.6,49.7,34.5,49.7,34.5z M41.7,28.5c-1.4-0.9-2.8-1.8-4.3-2.6 c-0.2-0.1-0.3-0.4-0.2-0.7c0.1-0.2,0.4-0.3,0.7-0.2c1.5,0.8,2.9,1.7,4.3,2.6c0.2,0.1,0.3,0.5,0.1,0.7 C42.2,28.6,42,28.6,41.7,28.5C41.7,28.5,41.7,28.5,41.7,28.5z"></path>
                                  <path className="fill-white" d="M30.7,22.6C30.7,22.6,30.7,22.6,30.7,22.6c0,0,0.9,0.4,2.3,1c0.2,0.1,0.5,0,0.7-0.2c0.1-0.2,0-0.5-0.2-0.7 c0,0,0,0,0,0c-1.4-0.7-2.2-1-2.3-1c-0.3-0.1-0.5,0-0.6,0.3C30.3,22.2,30.4,22.5,30.7,22.6z"></path>
                                  <path className="fill-warning" d="M22.6,23.6l-1.1-4.1c0,0-11.7-7.5-11.9-7.6c-0.1-0.2-4.9-6.5-4.9-6.5l8.2,3.5l12.2,8.4L22.6,23.6z"></path>
                                  <polygon className="fill-warning opacity-6" points="31.2,12.3 4.7,5.4 25.1,17.2"></polygon>
                                  <polygon className="fill-warning opacity-6" points="21.5,19.5 15,24.8 4.7,5.4 "></polygon>
                                </svg>
                              </figure>
                              {/* <!-- Body --> */}
                              <div className="card-body">
                                {/* <!-- Title --> */}
                                <h5 className="card-title text-white mb-2">Access 25K Online courses from 120 institutions, Start today!</h5>
                                <p className="text-white text-opacity-75">Here is the description of premium features which will allow users to get benefits and save a lot of money</p>
                                {/* <!-- Button --> */}
                                <a href="#" className="btn btn-sm btn-dark mb-0">Purchase Premium</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li> <a className="dropdown-item" href="#">Music</a></li>
                    <li> <a className="dropdown-item" href="#">Lifestyle</a></li>
                    <li> <a className="dropdown-item" href="#">IT & software</a></li>
                    <li> <a className="dropdown-item" href="#">Personal development</a></li>
                    <li> <a className="dropdown-item" href="#">Health & fitness</a></li>
                    <li> <a className="dropdown-item" href="#">Teaching</a></li>
                    <li> <a className="dropdown-item" href="#">Social science</a></li>
                    <li> <a className="dropdown-item" href="#">Math & logic</a></li>
                    <li> <hr className="dropdown-divider"/></li>
                    <li> <a className="dropdown-item bg-primary text-primary bg-opacity-10 rounded-2 mb-0" href="#">View all categories</a></li>
                  </ul>
                </li>
              </ul>
              {/* <!-- Nav category menu END --> */}

              {/* <!-- Nav Main menu START --> */}
              <ul className="navbar-nav navbar-nav-scroll me-auto">
                {/* <!-- Nav item 1 Demos --> */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle active" href="#" id="demoMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Demos</a>
                  <ul className="dropdown-menu" aria-labelledby="demoMenu">
                    <li> <a className="dropdown-item active" href="index-2.html">Home Default</a></li>
                    <li> <a className="dropdown-item" href="index-3.html">Home Education</a></li>
                    <li> <a className="dropdown-item" href="index-4.html">Home Academy</a></li>
                    <li> <a className="dropdown-item" href="index-5.html">Home Course</a></li>
                    <li> <a className="dropdown-item" href="index-6.html">Home University</a></li>
                    <li> <a className="dropdown-item" href="index-7.html">Home Kindergarten</a></li>
                    <li> <a className="dropdown-item" href="index-8.html">Home Landing</a></li>
                    <li> <a className="dropdown-item" href="index-9.html">Home Tutor</a></li>
                    <li> <a className="dropdown-item" href="index-10.html">Home School</a></li>
                    <li> <a className="dropdown-item" href="index-11.html">Home Abroad</a></li>
                    <li> <a className="dropdown-item" href="index-12.html">Home Workshop<span className="badge bg-success ms-2 smaller">New</span></a></li>
                  </ul>
                </li>

                {/* <!-- Nav item 2 Pages --> */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="pagesMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                  <ul className="dropdown-menu" aria-labelledby="pagesMenu">
                    {/* <!-- Dropdown submenu --> */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">Course</a>
                      <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                        <li> <a className="dropdown-item" href="course-categories.html">Course Categories</a></li>
                        <li> <hr className="dropdown-divider"/></li>
                        <li> <a className="dropdown-item" href="course-grid.html">Course Grid Classic</a></li>
                        <li> <a className="dropdown-item" href="course-grid-2.html">Course Grid Minimal</a></li>
                        <li> <hr className="dropdown-divider"/></li>
                        <li> <a className="dropdown-item" href="course-list.html">Course List Classic</a></li>
                        <li> <a className="dropdown-item" href="course-list-2.html">Course List Minimal</a></li>
                        <li> <hr className="dropdown-divider"/></li>
                        <li> <a className="dropdown-item" href="course-detail.html">Course Detail Classic</a></li>
                        <li> <a className="dropdown-item" href="course-detail-min.html">Course Detail Minimal</a></li>
                        <li> <a className="dropdown-item" href="course-detail-adv.html">Course Detail Advance</a></li>
                        <li> <a className="dropdown-item" href="course-detail-module.html">Course Detail Module<span className="badge bg-success ms-2 smaller">New</span></a></li>
                        <li> <a className="dropdown-item" href="course-video-player.html">Course Full Screen Video</a></li>
                      </ul>
                    </li>

                    {/* <!-- Dropdown submenu --> */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">About</a>
                      <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                        <li> <a className="dropdown-item" href="about.html">About Us</a></li>
                        <li> <a className="dropdown-item" href="contact-us.html">Contact Us</a></li>
                        <li> <a className="dropdown-item" href="blog-grid.html">Blog Grid</a></li>
                        <li> <a className="dropdown-item" href="blog-masonry.html">Blog Masonry</a></li>
                        <li> <a className="dropdown-item" href="blog-detail.html">Blog Detail</a></li>
                        <li> <a className="dropdown-item" href="pricing.html">Pricing</a></li>
                      </ul>
                    </li>

                    {/* <!-- Dropdown submenu --> */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">Hero Banner</a>
                      <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                        <li> <a className="dropdown-item" href="docs/snippet-hero-12.html">Hero Form<span className="badge bg-success ms-2 smaller">New</span></a></li>
                        <li> <a className="dropdown-item" href="docs/snippet-hero-13.html">Hero Vector<span className="badge bg-success ms-2 smaller">New</span></a></li>
                        <li> <p className="dropdown-item mb-0">Coming soon....</p></li>
                      </ul>
                    </li>

                    <li> <a className="dropdown-item" href="instructor-list.html">Instructor List</a></li>
                    <li> <a className="dropdown-item" href="instructor-single.html">Instructor Single</a></li>
                    <li> <a className="dropdown-item" href="become-instructor.html">Become an Instructor</a></li>
                    <li> <a className="dropdown-item" href="abroad-single.html">Abroad Single</a></li>
                    <li> <a className="dropdown-item" href="workshop-detail.html">Workshop Detail<span className="badge bg-success ms-2 smaller">New</span></a></li>

                    {/* <!-- Dropdown submenu --> */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">Shop</a>
                      <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                        <li> <a className="dropdown-item" href="shop.html">Shop grid</a></li>
                        <li> <a className="dropdown-item" href="shop-product-detail.html">Product detail</a></li>
                        <li> <a className="dropdown-item" href="cart.html">Cart</a></li>
                        <li> <a className="dropdown-item" href="checkout.html">Checkout</a></li>
                        <li> <a className="dropdown-item" href="empty-cart.html">Empty Cart</a></li>
                        <li> <a className="dropdown-item" href="wishlist.html">Wishlist</a></li>
                      </ul>
                    </li>

                    {/* <!-- Dropdown submenu --> */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">Help</a>
                      <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                        <li> <a className="dropdown-item" href="help-center.html">Help Center</a></li>
                        <li> <a className="dropdown-item" href="help-center-detail.html">Help Center Single</a></li>
                      </ul>
                    </li>

                    {/* <!-- Dropdown submenu --> */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">Authentication</a>
                      <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                        <li> <a className="dropdown-item" href="sign-in.html">Sign In</a></li>
                        <li> <a className="dropdown-item" href="sign-up.html">Sign Up</a></li>
                        <li> <a className="dropdown-item" href="forgot-password.html">Forgot Password</a></li>
                      </ul>
                    </li>

                    {/* <!-- Dropdown submenu --> */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">Form</a>
                      <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                        <li> <a className="dropdown-item" href="request-demo.html">Request a demo</a></li>
                        <li> <a className="dropdown-item" href="book-className.html">Book a className</a></li>
                        <li> <a className="dropdown-item" href="request-access.html">Free Access</a></li>
                        <li> <a className="dropdown-item" href="university-admission-form.html">Admission Form</a></li>
                      </ul>
                    </li>

                    <li> <a className="dropdown-item" href="faq.html">FAQs</a></li>
                    <li> <a className="dropdown-item" href="error-404.html">Error 404</a></li>
                    <li> <a className="dropdown-item" href="coming-soon.html">Coming Soon</a></li>
                  </ul>
                </li>

                {/* <!-- Nav item 3 Account --> */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="accounntMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Accounts</a>
                  <ul className="dropdown-menu" aria-labelledby="accounntMenu">
                    {/* <!-- Dropdown submenu --> */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#"><i className="fas fa-user-tie fa-fw me-1"></i>Instructor</a>
                      <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                        <li> <a className="dropdown-item" href="instructor-dashboard.html"><i className="bi bi-grid-fill fa-fw me-1"></i>Dashboard</a> </li>
                        <li> <a className="dropdown-item" href="instructor-manage-course.html"><i className="bi bi-basket-fill fa-fw me-1"></i>Courses</a> </li>
                        <li> <a className="dropdown-item" href="instructor-create-course.html"><i className="bi bi-file-earmark-plus-fill fa-fw me-1"></i>Create Course</a> </li>
                        <li> <a className="dropdown-item" href="course-added.html"><i className="bi bi-file-check-fill fa-fw me-1"></i>Course Added</a> </li>
                        <li> <a className="dropdown-item" href="instructor-quiz.html"><i className="bi bi-question-diamond fa-fw me-1"></i>Quiz</a> </li>
                        <li> <a className="dropdown-item" href="instructor-earning.html"><i className="fas fa-chart-line fa-fw me-1"></i>Earnings</a> </li>
                        <li> <a className="dropdown-item" href="instructor-studentlist.html"><i className="fas fa-user-graduate fa-fw me-1"></i>Students</a> </li>
                        <li> <a className="dropdown-item" href="instructor-order.html"><i className="bi bi-cart-check-fill fa-fw me-1"></i>Orders</a> </li>
                        <li> <a className="dropdown-item" href="instructor-review.html"><i className="bi bi-star-fill fa-fw me-1"></i>Reviews</a> </li>
                        <li> <a className="dropdown-item" href="instructor-payout.html"><i className="fas fa-wallet fa-fw me-1"></i>Payout</a> </li>
                      </ul>
                    </li>

                    {/* <!-- Dropdown submenu --> */}
                      <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#"><i className="fas fa-user-graduate fa-fw me-1"></i>Student</a>
                      <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                        <li> <a className="dropdown-item" href="student-dashboard.html"><i className="bi bi-grid-fill fa-fw me-1"></i>Dashboard</a> </li>
                        <li> <a className="dropdown-item" href="student-subscription.html"><i className="bi bi-card-checklist fa-fw me-1"></i>My Subscriptions</a> </li>
                        <li> <a className="dropdown-item" href="student-course-list.html"><i className="bi bi-basket-fill fa-fw me-1"></i>Courses</a> </li>
                        <li> <a className="dropdown-item" href="student-course-resume.html"><i className="far fa-fw fa-file-alt me-1"></i>Course Resume</a> </li>
                        <li> <a className="dropdown-item" href="student-quiz.html"><i className="bi bi-question-diamond fa-fw me-1"></i>Quiz </a> </li>
                        <li> <a className="dropdown-item" href="student-payment-info.html"><i className="bi bi-credit-card-2-front-fill fa-fw me-1"></i>Payment Info</a> </li>
                        <li> <a className="dropdown-item" href="student-bookmark.html"><i className="fas bi-cart-check-fill fa-fw me-1"></i>Wishlist</a> </li>
                      </ul>
                    </li>
                    
                    <li> <a className="dropdown-item" href="admin-dashboard.html"><i className="fas fa-user-cog fa-fw me-1"></i>Admin</a> </li>
                    <li> <hr className="dropdown-divider"/></li>
                    <li> <a className="dropdown-item" href="instructor-edit-profile.html"><i className="fas fa-fw fa-edit me-1"></i>Edit Profile</a> </li>
                    <li> <a className="dropdown-item" href="instructor-setting.html"><i className="fas fa-fw fa-cog me-1"></i>Settings</a> </li>
                    <li> <a className="dropdown-item" href="instructor-delete-account.html"><i className="fas fa-fw fa-trash-alt me-1"></i>Delete Profile</a> </li>
                    
                    <li> <hr className="dropdown-divider"/></li>
                    {/* <!-- Dropdown Level --> */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">Dropdown levels</a>
                      <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">

                        {/* <!-- dropdown submenu open right --> */}
                        <li className="dropdown-submenu dropend">
                          <a className="dropdown-item dropdown-toggle" href="#">Dropdown (end)</a>
                          <ul className="dropdown-menu" data-bs-popper="none">
                            <li> <a className="dropdown-item" href="#">Dropdown item</a> </li>
                            <li> <a className="dropdown-item" href="#">Dropdown item</a> </li>
                          </ul>
                        </li>
                        <li> <a className="dropdown-item" href="#">Dropdown item</a> </li>

                        {/* <!-- dropdown submenu open left --> */}
                        <li className="dropdown-submenu dropstart">
                          <a className="dropdown-item dropdown-toggle" href="#">Dropdown (start)</a>
                          <ul className="dropdown-menu dropdown-menu-end" data-bs-popper="none">
                            <li> <a className="dropdown-item" href="#">Dropdown item</a> </li>
                            <li> <a className="dropdown-item" href="#">Dropdown item</a> </li>
                          </ul>
                        </li>
                        <li> <a className="dropdown-item" href="#">Dropdown item</a> </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                {/* <!-- Nav item 4 Megamenu--> */}
                <li className="nav-item dropdown dropdown-fullwidth">
                  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Megamenu</a>
                  <div className="dropdown-menu dropdown-menu-end" data-bs-popper="none">
                    <div className="row p-4 g-4">
                      {/* <!-- Dropdown column item --> */}
                      <div className="col-xl-6 col-xxl-3">
                        <h6 className="mb-0">Get started</h6>
                        <hr/>
                        <ul className="list-unstyled">
                          <li> <a className="dropdown-item" href="#">Market research</a> </li>
                          <li> <a className="dropdown-item" href="#">Advertising</a> </li>
                          <li> <a className="dropdown-item" href="#">Consumer behavior</a> </li>
                          <li> <a className="dropdown-item" href="#">Digital marketing</a> </li>
                          <li> <a className="dropdown-item" href="#">Marketing ethics</a> </li>
                          <li> <a className="dropdown-item" href="#">Social media marketing</a> </li>
                          <li> <a className="dropdown-item" href="#">Public relations</a> </li>
                          <li> <a className="dropdown-item" href="#">Advertising</a> </li>
                          <li> <a className="dropdown-item" href="#">Decision science</a> </li>
                          <li> <a className="dropdown-item" href="#">SEO</a> </li>
                          <li> <a className="dropdown-item" href="#">Business marketing</a> </li>
                        </ul>
                      </div>
                      
                      {/* <!-- Dropdown column item --> */}
                      <div className="col-xl-6 col-xxl-3">
                        <h6 className="mb-0">Degree</h6>
                        <hr/>
                        {/* <!-- Dropdown item --> */}
                        <div className="mb-2 position-relative bg-primary-soft-hover rounded-2 transition-base p-3">
                          <a className="stretched-link h6 mb-0" href="#">Contact management</a>
                          <p className="mb-0 small text-truncate-2">Speedily say has suitable disposal add boy. On forth doubt miles of child.</p>
                        </div>
                        {/* <!-- Dropdown item --> */}
                        <div className="mb-2 position-relative bg-primary-soft-hover rounded-2 transition-base p-3">
                          <a className="stretched-link h6 mb-0" href="#">Sales pipeline</a>
                          <p className="mb-0 small text-truncate-2">Speedily say has suitable disposal add boy. On forth doubt miles of child.</p>
                        </div>
                        {/* <!-- Dropdown item --> */}
                        <div className="mb-2 position-relative bg-primary-soft-hover rounded-2 transition-base p-3">
                          <a className="stretched-link h6 mb-0" href="#">Security & Permission</a>
                          <p className="mb-0 small text-truncate-2">Speedily say has suitable disposal add boy. On forth doubt miles of child.</p>
                        </div>
                      </div>

                      {/* <!-- Dropdown column item --> */}
                      <div className="col-xl-6 col-xxl-3">
                        <h6 className="mb-0">Certificate</h6>
                        <hr/>
                        {/* <!-- Dropdown item --> */}
                        <div className="d-flex mb-4 position-relative">
                          <h2 className="mb-0"><i className="fab fa-fw fa-google text-google-icon"></i></h2>
                          <div className="ms-2">
                            <a className="stretched-link h6 mb-0" href="#">Google SEO certificate</a>
                            <p className="mb-0 small">No prerequisites</p>
                          </div>
                        </div>
                        {/* <!-- Dropdown item --> */}
                        <div className="d-flex mb-4 position-relative">
                          <h2 className="mb-0"><i className="fab fa-fw fa-linkedin-in text-linkedin"></i></h2>
                          <div className="ms-2">
                            <a className="stretched-link h6 mb-0" href="#">Business Development Executive(BDE)</a>
                            <p className="mb-0 small">No prerequisites</p>
                          </div>
                        </div>
                        {/* <!-- Dropdown item --> */}
                        <div className="d-flex mb-4 position-relative">
                          <h2 className="mb-0"><i className="fab fa-fw fa-facebook text-facebook"></i></h2>
                          <div className="ms-2">
                            <a className="stretched-link h6 mb-0" href="#">Facebook social media marketing</a>
                            <p className="mb-0 small">Expert advice</p>
                          </div>
                        </div>
                        {/* <!-- Dropdown item --> */}
                        <div className="d-flex mb-4 position-relative">
                          <h2 className="mb-0"><i className="fas fa-fw fa-basketball-ball text-dribbble"></i></h2>
                          <div className="ms-2">
                            <a className="stretched-link h6 mb-0" href="#">Creative graphics design</a>
                            <p className="mb-0 small">No prerequisites</p>
                          </div>
                        </div>
                      </div>

                      {/* <!-- Dropdown column item --> */}
                      <div className="col-xl-6 col-xxl-3">
                        <h6 className="mb-0">Download Eduport</h6>
                        <hr/>
                        {/* <!-- Image --> */}
                        <img src={require("../../assets/images/element/14.svg")} alt=""/>

                        {/* <!-- Download button --> */}
                        <div className="row g-2 justify-content-center mt-3">
                          {/* <!-- Google play store button --> */}
                          <div className="col-6 col-sm-4 col-xxl-6">
                            <a href="#"> <img src={require("../../assets/images/client/google-play.svg")} className="btn-transition" alt="google-store"/> </a>
                          </div>
                          {/* <!-- App store button --> */}
                          <div className="col-6 col-sm-4 col-xxl-6">
                            <a href="#"> <img src={require("../../assets/images/client/app-store.svg")} className="btn-transition" alt="app-store"/> </a>
                          </div>
                        </div>
                      </div>

                      {/* <!-- Action box --> */}
                      <div className="col-12">
                        <div className="alert alert-success alert-dismissible fade show mt-2 mb-0 rounded-3" role="alert">
                          {/* <!-- Avatar --> */}
                          <div className="avatar avatar-xs me-2">
                            <img className="avatar-img rounded-circle" src={require("../../assets/images/avatar/09.jpg")} alt="avatar"/>
                          </div>
                          {/* <!-- Info --> */}
                          The personality development className starts at 2:00 pm, click to <a href="#" className="alert-link">Join Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* <!-- Nav item 5 link--> */}
                <li className="nav-item dropdown">
                  <a className="nav-link" href="#" id="advanceMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-ellipsis-h"></i>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end min-w-auto" data-bs-popper="none">
                    <li> 
                      <a className="dropdown-item" href="https://support.webestica.com/" target="_blank">
                        <i className="text-warning fa-fw bi bi-life-preserver me-2"></i>Support
                      </a> 
                    </li>
                    <li> 
                      <a className="dropdown-item" href="docs/index.html" target="_blank">
                        <i className="text-danger fa-fw bi bi-card-text me-2"></i>Documentation
                      </a> 
                    </li>
                    <li> <hr className="dropdown-divider"/></li>
                    <li> 
                      <a className="dropdown-item" href="rtl/index.html" target="_blank">
                        <i className="text-info fa-fw bi bi-toggle-off me-2"></i>RTL demo
                      </a> 
                    </li>
                    <li> 
                      <a className="dropdown-item" href="https://themes.getbootstrap.com/store/webestica/" target="_blank">
                        <i className="text-success fa-fw bi bi-cloud-download-fill me-2"></i>Buy Eduport!
                      </a> 
                    </li>
                    <li> <hr className="dropdown-divider"/></li>
                    <li> 
                      <a className="dropdown-item" href="docs/alerts.html" target="_blank">
                        <i className="text-orange fa-fw bi bi-puzzle-fill me-2"></i>Components
                      </a> 
                    </li>
                    <li> 
                      <a className="dropdown-item" href="docs/snippets.html">
                        <i className="text-purple fa-fw bi bi-stickies-fill me-2"></i>Snippets<span className="badge bg-success ms-2 smaller">New</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              {/* <!-- Nav Main menu END --> */}

              {/* <!-- Nav Search START --> */}
              <div className="nav my-3 my-xl-0 px-4 flex-nowrap align-items-center">
                <div className="nav-item w-100">
                  <form className="position-relative">
                    <input className="form-control pe-5 bg-transparent" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset" type="submit">
                      <i className="fas fa-search fs-6 "></i>
                    </button>
                  </form>
                </div>
              </div>
              {/* <!-- Nav Search END --> */}
            </div>
            {/* <!-- Main navbar END --> */}

            {/* <!-- Profile START --> */}
            <div className="dropdown ms-1 ms-lg-0">
              <a className="avatar avatar-sm p-0" href="#" id="profileDropdown" role="button" data-bs-auto-close="outside" data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
                <img className="avatar-img rounded-circle" src={require("../../assets/images/avatar/01.jpg")} alt="avatar"/>
              </a>
              <ul className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3" aria-labelledby="profileDropdown">
                {/* <!-- Profile info --> */}
                <li className="px-3 mb-3">
                  <div className="d-flex align-items-center">
                    {/* <!-- Avatar --> */}
                    <div className="avatar me-3">
                      <img className="avatar-img rounded-circle shadow" src={require("../../assets/images/avatar/01.jpg")} alt="avatar"/>
                    </div>
                    <div>
                      <a className="h6" href="#">Lori Ferguson</a>
                      <p className="small m-0">example@gmail.com</p>
                    </div>
                  </div>
                </li>
                <li> <hr className="dropdown-divider"/></li>
                {/* <!-- Links --> */}
                <li><a className="dropdown-item" href="#"><i className="bi bi-person fa-fw me-2"></i>Edit Profile</a></li>
                <li><a className="dropdown-item" href="#"><i className="bi bi-gear fa-fw me-2"></i>Account Settings</a></li>
                <li><a className="dropdown-item" href="#"><i className="bi bi-info-circle fa-fw me-2"></i>Help</a></li>
                <li><a className="dropdown-item bg-danger-soft-hover" href="#"><i className="bi bi-power fa-fw me-2"></i>Sign Out</a></li>
                <li> <hr className="dropdown-divider"/></li>
                {/* <!-- Dark mode switch START --> */}
                <li>
                  <div className="modeswitch-wrap" id="darkModeSwitch">
                    <div className="modeswitch-item">
                      <div className="modeswitch-icon"></div>
                    </div>
                    <span>Dark mode</span>
                  </div>
                </li> 
                {/* <!-- Dark mode switch END --> */}
              </ul>
            </div>
            {/* <!-- Profile START --> */}
          </div>
        </nav>
        {/* <!-- Logo Nav END --> */}
      </header>
  )
}

export default Navbar