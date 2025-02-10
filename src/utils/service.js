import axios from "axios";

export const setAxiosHeader = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${Window.btoa(
    token
  )}`;
};

export const getData = (url, signal) => {
  return axios.get(url, { signal: signal });
};

export const postData = (data, signal) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    signal,
  };
  return axios.post(data.url, data.payload, config);
};
