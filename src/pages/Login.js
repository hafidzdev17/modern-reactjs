import React from 'react'
import { useHistory } from 'react-router-dom'

const Login = ({ setLogin }) => {

    const history = useHistory()

    return (
        <div>
            <h1>Halaman Login</h1>
            <br />
            <button onClick={() => {
                setLogin(true)
                history.push('/')
            }}>Login</button>
        </div>
    )
}

export default Login
