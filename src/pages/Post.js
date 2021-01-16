import React from 'react'
import { useParams, useHistory } from "react-router-dom"

const Post = () => {
    const { id } = useParams()
    const history = useHistory()
    return (
        <div>
            <h4>Post ke-{id}</h4>
            <p>
                Lorem ipsum post ke-{id}
            </p>
            <button onClick={() => history.push("/")}>Back Home</button>
        </div>
    )
}

export default Post
