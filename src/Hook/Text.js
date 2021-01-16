import React, { useEffect, useState } from 'react'

const Text = () => {

    const [text, setText] = useState("")

    // singkronisasi ke localStorage
    useEffect(function () {
        if (text.length) localStorage.setItem("edit-text", text)
    })

    // get nilai teks dari local storage kemudian mengupdate nilai State text.
    useEffect(function () {
        setText(localStorage.getItem("edit-text"))
    }, [])

    return (
        <div>
            <textarea value={text} onChange={(e) => setText(e.target.value)} />
            {text}
        </div>
    )
}

export default Text
