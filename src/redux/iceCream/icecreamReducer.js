import { BUY_ICECREAM } from "./icecreameType";

const initialStatate = {
  numOfIcecream: 20,
};

const icecreamReducer = (state = initialStatate, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - 1,
      };
    default:
      return state;
  }
};

export default icecreamReducer;
