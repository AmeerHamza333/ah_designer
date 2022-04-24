import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <div className="container-fluid">
        <img src="https://cdn-icons.flaticon.com/png/128/3270/premium/3270932.png?token=exp=1650709885~hmac=b06d80734fa780e92991eca9a27b3d20" alt="LOGO" style={{height: "7vh", marginRight: "10px", marginLeft: "7px"}}/>
      <a className="navbar-brand" style={{fontFamily: "Bebas Neue", fontSize : "2rem"}}>AH Designer</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse text-right list-inline" id="navbarSupportedContent" style={{marginLeft : "10px"}}>
          
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/" style={{fontFamily: "Saira Condensed", fontSize : "1.15rem"}}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/service" style={{fontFamily: "Saira Condensed", fontSize : "1.15rem"}}>Services</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/about" style={{fontFamily: "Saira Condensed", fontSize : "1.15rem"}}>About</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/contact" style={{fontFamily: "Saira Condensed", fontSize : "1.15rem"}}>Contact</Link>
          </li>
        </ul>
     
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}
