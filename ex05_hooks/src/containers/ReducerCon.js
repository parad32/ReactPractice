import ReducerCom from "../components/ReducerCom";
import { useReducer } from "react";

const reducer = (state ,action) =>{
    console.log("reducer call" ,state, action);
    switch(action.type){
        case "UP":
            return {value: state.value + 1}
        case "DOWN":
            return {value: state.value - 1}
        default : return state;
    }
    // return {value: 1000}
}

const initialState = { value: 0 };
function ReducerCon() {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log("state", state);

    const onUp = () => {
        dispatch({type: "UP"})
    }

    const onDown = () => {
        dispatch({type: "DOWN"})
    }

    return (
        <div>
            <ReducerCom state={state} onUp={onUp} onDown={onDown} />
        </div>
    )
}

export default ReducerCon;