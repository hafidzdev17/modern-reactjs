import React from 'react'
import style from './Button.module.scss'

const hello = (props) => {
    // css inline
    // const style = {color: 'red', fontWeight: 'bold'}
    return (
        <div>
            <button className={style.default}>
                {props.children}
            </button>
        </div>
    )
}

export default hello
