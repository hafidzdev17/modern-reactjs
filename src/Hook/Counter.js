import React, { useState } from 'react'

const Counter = ({ text }) => {
    const [counter, setCounter] = useState(0)

    const handleAdd = () => setCounter(counter + 1)
    const handleMinus = () => setCounter(counter - 1)

    if (counter < 0) {
        alert('error counter')
        setCounter(counter + 1)
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>{text}</h1>
            <button style={{ backgroundColor: 'limegreen', color: 'white' }} onClick={handleAdd}>+</button>
            <h1 style={{ color: 'red' }}> {counter} </h1>
            <button style={{ backgroundColor: 'blue', color: 'white' }} onClick={handleMinus}>-</button>
        </div>
    )
}

export default Counter
