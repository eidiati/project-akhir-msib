import axios from "axios";
import { toast } from "vue3-toastify";
import CryptoJS from "crypto-js";

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
    let loading = true;
    const id = toast.loading("Loading...", {
      position: toast.POSITION.TOP_CENTER,
    });
    try {
      const res = await axios.post(`${url}/${route}`, reqBody);
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
  const getPoll_or_Quiz = async (regex, postContent) => {
    const matches = postContent.match(regex);
    const extractedString = matches ? matches[1] : null;
    if (matches) {
      const decrypt = CryptoJS.AES.decrypt(
        extractedString.toString(),
        "lancangkuning2"
      ).toString(CryptoJS.enc.Utf8);

      return decrypt;
    } else {
      return null;
    }
  };
  return {
    getData,
    postData,
    getPoll_or_Quiz,
  };
};
