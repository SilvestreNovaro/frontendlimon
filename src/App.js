import { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ListaOdonComponent from "./ListaOdonComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddUser from "./AddUser";

function App() {
	return (
		<>
			<Navbar />
			<Router>
				<Routes>
					<Route exact path="/odontologos" element={<ListaOdonComponent />} />
					<Route exact path="/nuevosOdontologos" element={<AddUser />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
