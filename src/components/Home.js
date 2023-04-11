import React, { Fragment } from 'react'
import '../style.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import { GiArchaeopteryxFossil } from "react-icons/gi";
import { Link } from 'react-router-dom';


function Home() {
  return (
    <Fragment>
      {/* ----------------------------navbar start------------------------------------------- */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
        <div className="container-fluid">
          
          <Link className="navbar-brand text-decoration-none lh-1 ms-3 me-5 my-0 px-0 pt-0 fs-3" to="#"><span className='homeicn'><GiArchaeopteryxFossil /></span></Link>
          <button className="navbar-toggler nav-toglebtn-shadow bg-success" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link className="nav-link active" aria-current="page" to="home">Home</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link text-success" to="#">Link</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="#">Action</Link></li>
                  <li><Link className="dropdown-item" to="#">Another action</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>


              {/* <!-- Button trigger modal  --> */}
              <button type="button" class="btn btn-outline-success ms-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Login
              </button>

              {/* <!-- Modal --> */}
              <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content bg-warning">
                    <div class="modal-header">
                      <h5 class="modal-title text-success" id="staticBackdropLabel">Login</h5>
                      <button type="button" class="btn-close text-success" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      {/* log in form */}
                      <form>
                        <div class="mb-3 ">
                          <label for="exampleInputEmail1" class="form-label text-success">Email address</label>
                          <input type="email" class="form-control bg1" id="exampleInputEmail1" aria-describedby="emailHelp" />
                          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputPassword1" class="form-label text-success">Password</label>
                          <input type="password" class="form-control bg1 text-white" id="exampleInputPassword1" />
                        </div>
                        <Link className='regist'>Create New Account</Link>

                        {/* <div class="mb-3 form-check">
                          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div> */}
                        {/* <button type="submit" class="btn btn-primary float-end">login</button> */}
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-success">Login</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

            </form>
          </div>
        </div>
      </nav>


    
      {/* end of navbar */}


      {/* start of slider 
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./src/imges/img1.jpg" className="d-block w-100" alt=""/>
          </div>
          <div className="carousel-item">
            <img src="src/imges/img2.jpg" className="d-block w-100" alt=""/>
          </div>
          <div className="carousel-item">
            <img src="src/imges/img3.jpeg" className="d-block w-100" alt=""/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      */}


    </Fragment>
  )
}

export default Home