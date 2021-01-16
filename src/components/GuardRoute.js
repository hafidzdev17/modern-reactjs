import React from 'react'
import { Redirect } from "react-router-dom";

const GuardRoute = ({ children, isLogin }) => {
    return (
        <div>
            {isLogin ? children : <Redirect to="/login" />}
        </div>
    )
}

export default GuardRoute
