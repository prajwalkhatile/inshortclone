import axios from "axios";

axios.defaults.withCredentials = true;

export const getNews = async (page, size = 5) => {
  try {
    return await axios.get(`/news?page=${page}&&size=${size}`, {
      withCredentials: true,
    });
  } catch (error) {
    console.log(`Error while calling getNews API ${error}`);
  }
};

export const userData = async (data) => {
  try {
    return await axios.post(`/register`, data);
  } catch (error) {
    console.log(`Error while calling userData Api  ${error}`);
  }
};

export const userLogin = async (data) => {
  try {
    return await axios.post(`/login`, data);
  } catch (error) {
    console.log(`Error while calling userLogin Api ${error}`);
  }
};

export const userLogout = async () => {
  try {
    return await axios.get(`/logout`);
  } catch (error) {
    console.log(`Error while calling userLogout Api ${error}`);
  }
};
