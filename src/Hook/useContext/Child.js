/* eslint-disable no-undef */
import React, { useContext } from 'react'

// akses TemaSitus

const Child = () => {
    let tema = useContext(TemaSitus)
    return (
        <div>
            Tema situs sekarang adalah {tema}
        </div>
    )
}

export default Child
