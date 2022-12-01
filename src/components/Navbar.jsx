import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
{/* <nav className="navbar bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Home</a>
    <a className="navbar-brand" href="#">Turnos</a>
    <a className="navbar-brand" href="#">Pacientes</a>
    <a className="navbar-brand" href="#">Odontologos</a>
  </div>
</nav>  */}


<nav className="navbar bg-light">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1">Lista Odontologos</span>
    <a type="button" className="btn btn-outline-primary" href="/nuevosOdontologos">+ Odontologo</a> 
  </div>
</nav>
</>
  )
}

export default Navbar