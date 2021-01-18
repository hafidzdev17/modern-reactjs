/* eslint-disable no-undef */
import React, { useState } from 'react'

const useToggle = function () {
    const [value, toggle] = useState("OFF");
    return [value, toggle];
}

const customHook = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let [statusLampu, toggleLampu] = useToggle();

    return (
        <div>
            Lampu saat ini : {statusLampu} <br />
            <button onClick={e => toggleLampu(statusLampu)}>Klik</button>
        </div>
    )
}

export default customHook
