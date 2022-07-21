import { useReducer } from "react";
const initialState = { count: 0 };

function countReducer(state, actions) {
  switch (actions.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      if (state.count > 0) {
        return {
          count: state.count - 1,
        };
      }
      else{
        return {
          count:0
        }
      }
    default:
        throw new Error();
  }
}

export default function Counter() {
  const [countState, countDispatch] = useReducer(countReducer, initialState);

  const increment=()=>{
    countDispatch({
        type:'increment'
    })
  }

  const decrement=()=>{
    countDispatch({
        type:'decrement'
    })
  }
  return(
    <>
        count:{countState.count}
        <button className="btn btn-secondary m-2" onClick={increment}>+</button>
        <button className="btn btn-primary m-2" onClick={decrement}>-</button>
    </>
  )
}
