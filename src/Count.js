import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Count = () => {
    const dispatch = useDispatch()
    const count = useSelector(state => state.count)
    const plus =() =>{
        dispatch({type:"PLUS"})


    }
    const plusTen =()=>{
        dispatch({type:"PLUSTEN"})
    }
    const reset =() =>{
        dispatch({type:"RESET"})
    }
    const minus =() => {
        dispatch({type: "MINUS"})
    }
    const minusTen =() => {
        dispatch({type: "MINUSTEN"})
    }

    return (
        <div>
            <button onClick={plus}>plus</button>
            <button onClick={plusTen}>plusTen</button>
            <button onClick={reset}>reset</button>
            <button onClick={minus}>minus</button>
            <button onClick={minusTen}>minusTen</button>



<p>{count}</p>

        </div>
    );
};

export default Count;