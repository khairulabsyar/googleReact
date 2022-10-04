import axios from "axios";

axios.interceptors.request.use(
  async (config) => {
    config.headers["Accept"] = "application/json";
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export const get = async (endpoint, body, options) => {
  try {
    const response = await axios(endpoint, body, options);
    return {
      data: response.data,
      status: response.status,
    };
  } catch (e) {
    console.log(e.response);
    throw e.response;
  }
};
