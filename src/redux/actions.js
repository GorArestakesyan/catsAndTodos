import {
  ADD_CATS,
  MORE_CATS,
  LOADING,
  SET_CATEGORY_ID,
  DELLETE_ADD_CATS,
} from "./types";

export const addCats = (cats) => {
  return {
    type: ADD_CATS,
    payload: cats,
  };
};
export const setLoading = (loading) => ({
  type: LOADING,
  payload: loading,
});
export const setActiveCategory = (id) => ({
  type: SET_CATEGORY_ID,
  payload: id,
});
export const moreCats = (cats) => {
  return {
    type: MORE_CATS,
    payload: cats,
  };
};
export const setRmeove = () => {
  return {
    type: DELLETE_ADD_CATS,
  };
};
