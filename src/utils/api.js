import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
});

export const fetchProjects = () => {
  return api
    .get("/projects")
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return Promise.reject(err.response.data);
    });
};

export const fetchProjectById = (project_id) => {
  return api
    .get(`/projects/${project_id}`)
    .then((response) => {
      return response.data.project;
    })
    .catch((err) => {
      return Promise.reject(err.response.data);
    });
};
