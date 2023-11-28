import axios from "./axios.js";

export const createSocio = (socio) => axios.post('/socio', socio)

export const getAllSocios = () => axios.get('/socios')