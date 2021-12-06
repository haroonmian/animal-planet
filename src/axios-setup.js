import axios from "axios";

let baseURL = "https://animalrestapi.azurewebsites.net";

let Axios;

const init = () => {
  Axios = axios.create({
    baseURL: baseURL,
    timeout: 60000,
  });
  Axios.interceptors.request.use(handleSuccessRequest, handleErrorRequest);
};

const handleSuccessRequest = (request) => {
  request.params = {candidateID: "618fff05-b3a2-463b-85bd-648aedd803ce"};
  return request;
};

const handleErrorRequest = (error) => {
  return Promise.reject(error);
};

init();

export default Axios;