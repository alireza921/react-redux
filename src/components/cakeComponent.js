import { useSelector , useDispatch } from "react-redux";
import { buyCake } from "../redux/cake/cakeAction";

const CakeContainer = () => {

    const numOfCake = useSelector(state => state.cake.numOfCake) ; 
    const dispatch = useDispatch()

    return (  
        <div> 
          <h2> number Of Cakes : {numOfCake} </h2>
          <button onClick={() => dispatch(buyCake())} > buyCake</button>
        </div>
    );
}
 
export default CakeContainer;; 