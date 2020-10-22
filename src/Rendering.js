import * as React from 'react'
const Rendering = ({ a }) => {
    const b = null
    const c = false
    const d = ' '
    const e = 0
    return <div>
        <div>a - undefined: {a}</div>
        <div>b - null: {b}</div>
        <div>c - true/false: {c}</div>
        <div>d - empty / white space: {d}</div>
        <div>e - 0: {e}</div>
    </div>
}
export default Rendering
