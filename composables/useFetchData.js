import axios from "axios";

export const useFetchData = () => {
  const getData = async (route) => {
    try {
      const res = await axios.get(`https://dummyjson.com/${route}`);
      const data = res.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const getOneData = async (route, id) => {
    try {
      const res = await axios.get(`https://dummyjson.com/${route}/${id}`);
      const data = res.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getData,
    getOneData,
  };
};
