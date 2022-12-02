import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const ListaPacientesComponent = () => {
	const [paciente, setPaciente] = useState([]);
	// const { id } = useParams();
	/* const [users, setUsers] = useState([]); */
	useEffect(() => {
		listarPacientes();
	}, []);

	const listarPacientes = async () => {
		const result = await axios.get("http://localhost:8080/pacientes");
		setPaciente(result.data);
	};

	const deletePaciente = async (id) => {
		await axios.delete(`http://localhost:8080/eliminarPaciente/${id}`);
		listarPacientes();
	};

	return (
		<div>
			<h2 className="text-center"> </h2>
			<div className="row">
				<table className="table table-striped table-bordered">
					<tbody>
						<tr>
							<th>Id</th>
							<th>Nombre</th>
							<th>Apellido</th>
							<th>Acción</th>
						</tr>
					</tbody>
					<tbody>
						{paciente.map((paciente) => (
							<tr key={paciente.id}>
								<td> {paciente.id} </td>
								<td> {paciente.nombre} </td>
								<td> {paciente.apellido} </td>
								<td>
									<Link
										type="button"
										class="btn btn-primary btn-lg"
										to={"/modificarPaciente"}
									>
										Editar
									</Link>
									<Link
										type="button"
										class="btn btn-danger btn-lg"
										onClick={() => deletePaciente(paciente.id)}
									>
										Eliminar
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<div></div>
			</div>
		</div>
	);
};

export default ListaPacientesComponent;
