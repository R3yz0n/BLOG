import React from 'react'
import Logo from '../images/blog.jpg'
import { Link } from 'react-router-dom'
import { UserContext } from '../store/AuthContext'

const Navbar = () => {
    const { currUser, logout } = UserContext();
    return (
        <section name='navbar' className='flex justify-around mt-5 w-screen' >

            <div name='logo'>
                <Link to='/'> <img src={Logo} alt="error" className='w-20' /></Link>
            </div>
            <div name='links' className='flex gap-3 text-sm items-center'>

                <Link to='/?category=art'>ART</Link>
                <Link to='/?category=science'>SCIENCE</Link>
                <Link to='/?category=technology'>TECHNOLOGY</Link>
                <Link to='/?category=cinema'>CINEMA</Link>
                <Link to='/?category=design'>DESIGN</Link>
                <Link to='/?category=food'>FOOD</Link>

                {currUser && <span>{currUser.userName}</span>}
                {
                    currUser ? <button onClick={logout}>Logout</button> : <Link to='/login'>Login</Link>
                }

                <span>
                    <Link to='write'>Write</Link>
                </span>

            </div>

        </section>
    )
}

export default Navbar