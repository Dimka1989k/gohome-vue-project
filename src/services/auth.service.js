import axios from "axios";

const axiosInstance = axios.create({
  baseUrl: "https://apt-booking-api.herokuapp.com",
});

export const loginUser = (payload) => {
  return axiosInstance.post(
    "https://apt-booking-api.herokuapp.com/users/login",
    payload
  );
};

export const registerUser = (payload) => {
  return axiosInstance.post(
    "https://apt-booking-api.herokuapp.com/users/register",
    payload
  );
};
