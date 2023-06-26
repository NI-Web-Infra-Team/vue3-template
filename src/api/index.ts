import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:3000/api",
	timeout: 1000,
	headers: {
		"Content-Type": "application/json",
	},
});

api.interceptors.request.use(
	(config) => {
		return config;
	},
	(e) => {
		return Promise.reject(e);
	}
);

api.interceptors.response.use(
	(res) => {
		return res;
	},
	(e) => {
		return Promise.reject(e);
	}
);

export default api;
