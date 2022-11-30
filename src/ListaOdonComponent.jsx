import React, { Component } from 'react';
import OService from './OService';

class ListaOdonComponent extends Component {
    debugger
    constructor() {
        super();
        this.state = {
            odontologos: []
        }
    }

    componentDidMount() {
        OService.getOdontologos().then((res) => {
            this.setState({ odontologos: res.data });
        }
        );
    }

    render() {
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
                            </tr>
                        </tbody>
                        <tbody>
                        
                            {
                                this.state.odontologos.map(
                                    odontologos =>
                                        <tr key={odontologos.id}>
                                            <td> {odontologos.id} </td>
                                            <td> {odontologos.nombre} </td>
                                            <td> {odontologos.apellido} </td>
                                            <td> {odontologos.matricula} </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div>
                    <button type="button" class="btn btn-success btn-lg">Agregar Odontologo</button>
                    <button type="button" class="btn btn-danger btn-lg">Eliminar Odontologo</button>
                    <button type="button" class="btn btn-primary btn-lg">Editar Odontologo</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListaOdonComponent;