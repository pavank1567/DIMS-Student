import React from 'react'
import PropTypes from 'prop-types'

export default function Header(props){
    let colorStyle={
        color:"white"
    }
    let navBg={
        background:"#8c1515"
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid" style={navBg}>
          <a className="navbar-brand" href="#"><img src="download.png" alt="" height="50px" width="50px"/></a>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={colorStyle}>events</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={colorStyle}>Gallery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={colorStyle}>Research Clubs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={colorStyle}>MOUs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={colorStyle}>Dept. Library</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={colorStyle}>Griviences</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={colorStyle}>Circulars</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={colorStyle}>
                  membership
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Faculty</a></li>
                  <li><a className="dropdown-item" href="#">Students</a></li>
                  <li><a className="dropdown-item" href="#">Alumni</a></li>
                </ul>
              </li>
            </ul>
        </div>
          </div>
      </nav>
    )
}
Header.defaultProps={
  title:"Your Title"
}
Header.propTypes={
  title:PropTypes.string
}