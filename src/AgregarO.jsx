import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AgregarO = () => {
  let navigate=useNavigate()
  const [user, setUser] = useState({nombre:"",apellido:"",matricula:""});

  const {nombre, apellido, matricula} = user;

  const onInputChange= (e) => {
    setUser({...user,[e.target.name]:e.target.value});
  };

  const onSubmit =async (e) => {
    e.preventDefault();
    await axios.post("localhost:8080/nuevosOdontologos",JSON.stringify(user));
    navigate("/odontologos")
  };

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Registrar Odontologo</h2>
          <form onSubmit={(e)=> onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="Nombre" className="form-label">Nombre</label>
            <input type="text" value={nombre} onChange={(e)=>onInputChange(e)} className='form-control'placeholder='Ingrese su nombre' name='nombre'/>
          </div>

          <div className="mb-3">
            <label htmlFor="Nombre" className="form-label ">Apellido</label>
            <input type="text" value={apellido} onChange={(e)=>onInputChange(e)} className='form-control'placeholder='Ingrese su apellido' name='apellido'/>
          </div>

          <div className="mb-3">
            <label htmlFor="Nombre" className="form-label ">Matricula</label>
            <input type="text" value={matricula} onChange={(e)=>onInputChange(e)} className='form-control'placeholder='Ingrese su matricula' name='matricula'/>
          </div>
          <button type='submit' className="btn btn-outline-primary" >Agregar Odontologo</button>
          <a className="btn btn-outline-secondary" href='/odontologos'>Volver al Listado Odontologos</a>
          </form>
        </div>
        
      </div>
    </div>
  )
}

export default AgregarO