import React from 'react'

const BlueButton = ({ onCustomClick, caption }) => {
    return <button style={{ border: '2px solid blue', marginBottom: '40px' }} onClick=
        {onCustomClick}>
        {caption}
    </button>

}

export default BlueButton
