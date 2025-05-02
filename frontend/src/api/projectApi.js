import axios from 'axios';

const API_BASE = `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'}/api`;

console.log("API_BASE: ", API_BASE);


export const getProjects = async () => axios.get(`${API_BASE}/projects`, { withCredentials: true });
export const createProject = async (payload) => axios.post(`${API_BASE}/projects`, payload, { withCredentials: true });
export const deleteProject = async (id) => axios.delete(`${API_BASE}/projects/${id}`, { withCredentials: true });

