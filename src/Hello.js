import React from 'react'

// deklrasi props
// const Hello = (props) => `Hello ${props.name}`

//  didestrukturisasi langsung pada argumen fungsinya.
const Hello = ({ name, greeting }) => {
    return <div>
        <h1>Halo {name}</h1>
        {/* <h2>Salam {greeting}</h2> */}
    </div>
}

// use default props
Hello.defaultProps = {
    name: 'anonim'
}

export default Hello