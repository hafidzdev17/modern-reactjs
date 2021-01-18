import React, { useReducer } from 'react'

let reducer = function (state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;

        case 'DECREMENT':
            return state - 1;

        case 'NULL':
            return 0;

        default:
            return state;
    }
}

const Reducer = () => {

    let [counter, dispatch] = useReducer(reducer, 0)

    if (counter < 0) {
        dispatch({ type: 'NULL' })
    }

    return (
        <div>
            <button style={{ marginRight: '10px' }} onClick={() => dispatch({ type: 'INCREMENT' })}> + </button>
            <span style={{ fontWeight: 'bold', fontSize: '20px' }}>  {counter}</span>
            <button style={{ marginLeft: '10px' }} onClick={() => dispatch({ type: 'DECREMENT' })}> - </button>
        </div>
    )
}

export default Reducer
