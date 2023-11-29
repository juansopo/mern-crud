import axios from "./axios.js";

export const getAllSociosRequest = () => axios.get("/socios");

export const getSocioRequest = (socio) => axios.get(`/socios/${socio._id}`);

export const createSocioRequest = (socio) => axios.post("/socios", socio);

export const updateSocioRequest = (socio) => axios.put(`/socios/${socio._id}`, socio);

export const deleteSocioRequest = (socio) =>
  axios.delete(`/socios/${socio._id}`, socio);
