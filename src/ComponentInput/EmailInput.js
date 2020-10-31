import React from 'react'

const EmailInput = ({label, value, onChange}) => {
    return (
        <div>
           <label>
               {label}
           <input type="email" value={value} onChange={onChange}/>
           </label>
        </div>
    )
}

export default EmailInput
