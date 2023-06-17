import axiosClient from "./axiosClient";

const API_PATH = "/api/v1/files";

const postFile = (file) => {
  axiosClient.post(API_PATH, file);
};

const fileServices = {
  postFile,
};

export default fileServices;
