import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
});

export const fetchProjects = () => {
  return api
    .get("/projects")
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      return Promise.reject(err.response.data);
    });
};
