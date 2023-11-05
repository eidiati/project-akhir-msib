import axios from "axios";

export const useFetchData = async () => {
  const getData = async (route) => {
    const url = useRuntimeConfig().public.url_api;
    let loading = true;
    try {
      const res = await axios.get(`${url}/${route}`);
      loading = false;
      return {
        data: res.data.data,
        loading: loading,
      };
    } catch (error) {
      console.log(error);
    }
  };
  const getAllData = async (route) => {
    const url = useRuntimeConfig().public.url_api;
    const { pending, data: res } = await useFetch(`${url}/${route}`, {
      lazy: true,
    }).catch((error) => console.log(error.data));

    return {
      data: res.value.data,
      loading: pending.value,
    };
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
    getAllData,
    getOneData,
  };
};
