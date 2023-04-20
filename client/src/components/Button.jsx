import React from 'react'

const Button = (props) => {
    return (
        <button{...props} className={`${props.className} bg-gray-300 border-[1px] border-gray-500`} >{props.children}</button>
    )
}

export default Button