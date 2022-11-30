import React from 'react'

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
</nav> */}


<nav className="navbar bg-light">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1">Lista Odontologos</span>
    <button type="button" class="btn btn-outline-primary">+ Odontologo</button>
  </div>
</nav>
</>
  )
}

export default Navbar