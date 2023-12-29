import {useReducer, useEffect, useState} from "react";

/*
* NOTE
* -- useReducer
* 1- reducer -> functions -> handle state
* 2- action -> Object -> dispatch to reducer (type, payload)
* 3- store -> stores state
*/
const ACTIONS = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT"
}
const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            // action.payload=1
            return {count: state.count + action.payload};
        case ACTIONS.DECREMENT:
            // action.payload=1
            return {count: state.count - action.payload};
        default:
            return state;
    }
}

const UseReducerExample = () => {

    // const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(reducer, {count: 0});

    const increment = () => {
        dispatch({type: ACTIONS.INCREMENT, payload: 1});
    }
    const decrement = () => {
        dispatch({type: ACTIONS.DECREMENT, payload: 1});
    }

    return (
        <div className="mx-auto mt-5 d-grid gap-3 w-50">
            <h5 className="alert alert-info text-center">
                <button
                    className="btn btn-primary"
                    onClick={increment}
                >
                    بزن اضافه کن
                </button>
                <p className="alert alert-warning text-center">
                    شمارش شما دوست عزیز برابر است با:{""}
                    <span className="badge rounded-pill bg-success">{state.count}</span>
                </p>
                <button
                    className="btn btn-danger"
                    onClick={decrement}
                >
                    بزن کم کن اگه راست میگی
                </button>
            </h5>
        </div>
    )
};

export default UseReducerExample;