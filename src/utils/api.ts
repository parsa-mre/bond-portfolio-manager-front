import axios from "axios";

const BASE_URL = import.meta.env.BASE_URL || "http://localhost:4477";

const Api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// before request is sent
Api.interceptors.request.use(
    (config) => {
        // Do something before request is sent
        // print the url
        console.log(`Request URL: ${config.url}`);
        return config;
    },
    (error) => {
        // Do something with request error
        return Promise.reject(error);
    }
);

export default Api;
