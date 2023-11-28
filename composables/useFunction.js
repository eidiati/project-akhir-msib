import CryptoJS from "crypto-js";

export const useFunction = () => {
  const encrypted = (value) => {
    const secretKey = useRuntimeConfig().public.secret_key;
    const encrypt = CryptoJS.AES.encrypt(
      value.toString(),
      secretKey
    ).toString();
    return encrypt;
  };
  const decrypted = (value) => {
    const secretKey = useRuntimeConfig().public.secret_key;
    const decrypt = CryptoJS.AES.decrypt(value.toString(), secretKey).toString(
      CryptoJS.enc.Utf8
    );
    return decrypt;
  };
  const get_poll_id_or_quiz_id = async (regex, postContent) => {
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
  return { encrypted, decrypted, get_poll_id_or_quiz_id };
};
