import axios from "axios";

const ODONTO_API_BASE_URL = "http://localhost:8080/odontologos";

class OService {
	getOdontologos() {
		return axios.get(ODONTO_API_BASE_URL);
	}
	deleteOdontologos(id) {
		return axios.delete("localhost:8080/eliminarOdontologo/{id}");
	}
}

export default new OService();
