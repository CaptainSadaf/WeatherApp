import Axios from "axios";
import { decodeResponse } from "./utils";

//common API call handle
export const makeRequest = (api, options) => {
  return new Promise((resolve, reject) => {
    rawHttp(options.type, api, options)
      .then(response => {
        resolve(decodeResponse(response));
      })
      .catch(error => reject(error));
  });
};

const rawHttp = (method, url, options) => {
  return Axios({
    method,
    url,
    // data: options.params,
    headers: options.headers ? options.headers : {}
  });
};
