import React from 'react'
import Logo from '../images/blog.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <section name='navbar' className='flex justify-around mt-5 w-screen' >

            <div name='logo'>
                <img src={Logo} alt="error" className='w-20' />
            </div>
            <div name='links' className='flex gap-3 text-sm'>

                <Link to='/?cat=art'>ART</Link>
                <Link to='/?science'>SCIENCE</Link>
                <Link to='/?cat=technology'>TECHNOLOGY</Link>
                <Link to='/?cat=cinema'>CINEMA</Link>
                <Link to='/?cat=design'>DESIGN</Link>
                <Link to='/?cat=food'>FOOD</Link>

                <span>Reyzon</span>
                <span>Logout</span>
                <span>
                    <Link to='write'>Write</Link>
                </span>

            </div>

        </section>
    )
}

export default Navbar