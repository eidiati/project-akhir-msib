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
  const postData = async (route, reqBody) => {
    const url = useRuntimeConfig().public.url_api;
    const res = await axios.post(`${url}/${route}`, reqBody);
    return res.data;
  };

  return {
    getData,
    postData,
  };
};
