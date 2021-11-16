import { Add_TO_BAG } from "./type";

const initialState = {
  products: [],
  count: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case Add_TO_BAG:
      return {
        ...state,
        products: [...state.products, action.payload],
        count: state.count + 1,
      };

    default:
      return state;
  }
};

export default cartReducer;
