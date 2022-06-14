import { useSelector, useDispatch } from "react-redux/es/exports";
import { buyIcecream } from "../redux/iceCream/icecreamAction";
const IcecreamComponenet = () => {
  const numOfIcecream = useSelector((state) => state.icecream.numOfIcecream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2> number of ice cream : {numOfIcecream} </h2>
      <button onClick={() => dispatch(buyIcecream())}> buy icecream</button>
    </div>
  );
};

export default IcecreamComponenet;
