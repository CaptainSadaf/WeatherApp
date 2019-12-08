import { SET_LOADER_IS_LOADING, initLoaderForm } from "./constants";

export const Loader = (state = initLoaderForm, action) => {
  switch (action.type) {
    case SET_LOADER_IS_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};
