import {
  ADD_CATS,
  MORE_CATS,
  LOADING,
  SET_CATEGORY_ID,
  DELLETE_ADD_CATS,
} from "./types";

const initialState = {
  cats: [],
  loading: false,
  categoryID: 1,
};
function CatsReducer(state = initialState, action) {
  switch (action.type) {
    case MORE_CATS:
      return {
        state,
      };
    case ADD_CATS:
      return {
        ...state,
        cats: [...state.cats, ...action.payload],
      };
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_CATEGORY_ID:
      return {
        ...state,
        categoryID: action.payload,
      };
    case DELLETE_ADD_CATS:
      return { ...state, cats: [] };
    default:
      return state;
  }
}

export default CatsReducer;
