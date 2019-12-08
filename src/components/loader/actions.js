import { SET_LOADER_IS_LOADING } from "./constants";

export const isLoading = isLoading => {
  return {
    type: SET_LOADER_IS_LOADING,
    payload: isLoading
  };
};
