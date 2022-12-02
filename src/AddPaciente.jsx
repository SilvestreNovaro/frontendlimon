import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddPaciente() {
	let navigate = useNavigate();

	const [paciente, setPaciente] = useState({
		nombre: "",
		apellido: "",
		domicilio:"",
        dni:"",
        // fechaAlta:{}
	});

	const { nombre, apellido, domicilio, dni, fechaAlta } = paciente;

	const onInputChange = (e) => {
		setPaciente({ ...paciente, [e.target.name]: e.target.value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		await axios.post("http://localhost:8080/nuevosPacientes", paciente);
		navigate("/pacientes");
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
					<h2 className="text-center m-4">Registrar Paciente</h2>

					<form onSubmit={(e) => onSubmit(e)}>
						<div className="mb-3">
							<label htmlFor="Name" className="form-label">
								Nombre
							</label>
							<input
								type={"text"}
								className="form-control"
								placeholder="Nombre"
								name="nombre"
								value={nombre}
								onChange={(e) => onInputChange(e)}
							/>
						</div>

						<div className="mb-3">
							<label htmlFor="Username" className="form-label">
								Apellido
							</label>
							<input
								type={"text"}
								className="form-control"
								placeholder="Ingrese su apellido "
								name="apellido"
								value={apellido}
								onChange={(e) => onInputChange(e)}
							/>
						</div>

						<div className="mb-3">
							<label htmlFor="Domicilio" className="form-label">
								Domicilio{" "}
							</label>
							<input
								type={"text"}
								className="form-control"
								placeholder="Ingrese su domicilio"
								name="domicilio"
								value={domicilio}
								onChange={(e) => onInputChange(e)}
							/>
						</div>
                        <div className="mb-3">
							<label htmlFor="DniPaciente" className="form-label">
								DNI
							</label>
							<input 
								type={"text"}
								className="form-control"
								placeholder="Ingrese su DNI "
								name="dni"
								value={dni}
								onChange={(e) => onInputChange(e)}
							/>
						</div>

                        {/* <div className="mb-3">
							<label htmlFor="Fecha" className="form-label">
								Fecha de alta
							</label>
							<input
								type={"date"}
								className="form-control"
								placeholder="Ingrese su Fecha de alta"
								name="Fecha"
								value={fechaAlta}
								onChange={(e) => onInputChange(e)}
							/>
						</div> */}
						<button type="submit" className="btn btn-outline-primary">
							Submit
						</button>
						<Link className="btn btn-outline-danger mx-2" to="/">
							Cancel
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
}
