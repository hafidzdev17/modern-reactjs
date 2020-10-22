import React from 'react'

const Conditional = ({ username }) => {
    const isLogin = true
    return (
        <div>
            <p>Conditional Rendering</p>
            {isLogin ? <b> user {username}  sudah login</b> : 'silahkan login'}
        </div>
    )
}

export default Conditional