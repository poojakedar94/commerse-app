import { Add_TO_BAG } from "../reducers/type";

export const addToBag = (item) => {
  return {
    type: Add_TO_BAG,
    payload: item,
  };
};
