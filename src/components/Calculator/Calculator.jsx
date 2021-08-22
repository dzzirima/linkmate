import React from "react";
import { useSelector ,useDispatch} from "react-redux";
import { increment } from "../../redux/ducks/counter";
const Calculator = (props) => {
  
  
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()
  
    const handleIncrement = () => {
        dispatch(increment()) 
    };
    const handleDecrement = () => {
  
     ;
    };
  
    return (
      <div style={{ backgroundColor: "grey", margin: "10px" }}>
        <h3> {`Votes: ${count}`} </h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={handleIncrement}> Increment </button>
          <button onClick={handleDecrement}> Decrement </button>
        </div>
      </div>
    );
  };
  
  export default Calculator;