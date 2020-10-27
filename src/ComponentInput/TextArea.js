import React from 'react'

const TextArea = ({ label, value, onChange }) => {
    return (
        <div>
            <label>
                {label} : <textarea value={value} onChange={onChange} cols="30" rows="10"></textarea>
            </label>
        </div>
    )
}

export default TextArea
