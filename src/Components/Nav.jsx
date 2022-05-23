import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
<nav className="navbar navbar-expand-lg navbar-light b ">
  <div className="container-fluid ">
    <a className="navbar-brand Poppins gras " href="#"><Link style={{textDecoration:'none', color: 'black'}} to="/Contenu">TrackD<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="currentColor" className="bi bi-search mb-1 vert sp" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
</svg>wn </Link></a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active Poppins sgras text-secondary" aria-current="page" href="#"><Link style={{textDecoration:'none', color: 'gray'}} to="/Annonce">AVIS DE RECHERCHE</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active Poppins sgras text-secondary" aria-current="page" href="#"><Link style={{textDecoration:'none', color: 'gray'}} to="/Property">MES PROPRIETES</Link></a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle Poppins sgras text-secondary" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           CATEGORIES
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Personnes</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Autres</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex Poppins gras">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success  " type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    )
}

export default Nav

