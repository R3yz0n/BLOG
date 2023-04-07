import React from 'react'
import logo from '../images/blog.jpg'

const Footer = () => {
    return (
        <footer className='flex'>
            <img src={logo} alt="error" className='w-12' />
            <span>
                Made with ❤️ and React. js
            </span>
        </footer>
    )
}

export default Footer