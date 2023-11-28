import axios from "axios";
import { toast } from "vue3-toastify";

export const useFetchData = async () => {
  const getData = async (route) => {
    const url_api = useRuntimeConfig().public.url_api;
    let loading = true;
    try {
      const res = await axios.get(`${url_api}/${route}`);
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
    const url_api = useRuntimeConfig().public.url_api;
    let loading = true;
    const id = toast.loading("Loading...", {
      position: toast.POSITION.TOP_CENTER,
    });
    try {
      const res = await axios.post(`${url_api}/${route}`, reqBody);
      toast.update(id, {
        render: res.data.message,
        autoClose: true,
        closeOnClick: true,
        closeButton: true,
        type: "success",
        isLoading: false,
      });

      loading = false;
      return {
        data: res.data,
        loading: loading,
      };
    } catch (error) {
      toast.update(id, {
        render: error.data.message,
        autoClose: true,
        closeOnClick: true,
        closeButton: true,
        type: "error",
        isLoading: false,
      });
      loading = false;
      return {
        data: error.data,
        loading: loading,
      };
    }
  };

  return {
    getData,
    postData,
  };
};
