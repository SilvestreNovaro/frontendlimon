import { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ListaOdonComponent from "./ListaOdonComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import AddPaciente from "./AddPaciente";
import ListaPacientesComponent from "./ListaPacientesComponent";
import EditPaciente from "./EditPaciente";


function App() {

	
	return (
		<>
			<Navbar/>
			<Router>
				<Routes>
					<Route exact path="/odontologos" element={<ListaOdonComponent />} />
					<Route exact path="/nuevosOdontologos" element={<AddUser />} />
					<Route exact path="/modificarOdontologo" element={<EditUser />} />
					<Route exact path="/nuevosPacientes" element={<AddPaciente />} />
					<Route exact path="/pacientes" element={<ListaPacientesComponent />} />
					<Route exact path="/modificarPaciente" element={<EditPaciente />} />

				</Routes>
			</Router>
		</>
	);
}

export default App;
