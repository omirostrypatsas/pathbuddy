import axios from "axios";

export default function Api(type, serviceUrl, params) {
  const baseURL = "http://192.168.1.122:8080";
  let url = baseURL + serviceUrl;

  axios.defaults.headers.common["Accept"] = "application/json";
  axios.defaults.headers.common["Content-Type"] = "application/json";

  switch (type) {
    case "get":
      return axios
        .get(url, { params: params })
        .then((response) => {
            console.log(response)
          return response;
        })
        .catch((error) => {
          return error;
        });
    case "post":
      return axios
        .post(url, { params: params })
        .then((response) => {
          return response;
        })
        .catch((error) => {
          return error;
        });
    default:
      break;
  }
}