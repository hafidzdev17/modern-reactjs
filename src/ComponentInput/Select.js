import React from 'react'

const Select = ({ label, value, onChange }) => {
    return (
        <div>
            {label}
            <select value={value} onChange={onChange}>
                <option value="informatika">Informatika</option>
                <option value="elektro">Elektro</option>
                <option value="sistem informasi">SI</option>
                <option value="perkapalan">Perkapalan</option>
            </select>
        </div>
    )
}

export default Select
