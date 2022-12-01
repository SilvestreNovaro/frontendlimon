import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';


const ListaOdonComponent = () => {

    const [odontologos, setOdontologos]= useState([])

    useEffect(() => {
      listarOdontologos();
    },[]);
    
    const listarOdontologos=async()=>{
const result=await axios.get("http://localhost:8080/odontologos");
setOdontologos(result.data);
    };

  return (

            <div>
                <h2 className="text-center">  </h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Matrícula</th>
                                <th>Acción</th>
                            </tr>
                        </tbody>
                        <tbody>
                        
                            {odontologos.map(odontologos =>
                                        <tr key={odontologos.id}>
                                            <td> {odontologos.id} </td>
                                            <td> {odontologos.nombre} </td>
                                            <td> {odontologos.apellido} </td>
                                            <td> {odontologos.matricula} </td>
                                            <td> 
                    <button type="button" class="btn btn-primary btn-lg">Editar </button>
                    <button type="button" class="btn btn-danger btn-lg">Eliminar </button>  </td>
                                        </tr>
                                )}
                        </tbody>
                    </table>
                    <div>
                    
                    </div>
                </div>
            </div>
        );
    }


export default ListaOdonComponent