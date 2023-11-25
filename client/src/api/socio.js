import axios from "./axios.js";

export const createSocio = (socio) => axios.post('/socios', socio)