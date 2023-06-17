import axiosClient from "./axiosClient";

const API_PATH = "/api/v1/admin/statistic/by-week";

const getHeaderConfig = () => {
  return {
    headers: {
      token: localStorage.getItem("token"),
    },
  };
};

const getStatistic = () => {
  return axiosClient.get(API_PATH, getHeaderConfig());
};

const statisticServices = {
  getStatistic,
};

export default statisticServices;
