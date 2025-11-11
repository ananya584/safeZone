import axios from "axios";

const API = axios.create({baseURL: "http://localhost:5000"});

export const getIncidents = () => API.get('/incidents');
export const reportIncident = (data) => API.post('/incidents/report',data);
export const voteIncident = (id, vote) => API.post(`/incidents/vote/${id}`, { vote });