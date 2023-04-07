import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/loginLogo.png'

const Register = () => {
    return (
        <div name='register' className='b flex flex-col w-screen h-screen'>



            <form className='flex flex-col w-1/3 border-2 m-auto h-[400px] p-10 gap-4 relative'>
                <img src={Logo} alt="error" className='w-20 absolute top-[-5%] left-[0]' />
                <h1 className='text-xl mx-auto'>Signup</h1>


                <input type="text" placeholder='Username' className='border-b-[1px] border-black px-3 w-2/3' />
                <input type="email" placeholder='Email' className='border-b-[1px] border-black px-3 w-2/3' />
                <input type="text" placeholder='Password' className='border-b-[1px] border-black px-3 w-2/3' />

                <button className='w-20 border-2'>Signup</button>
                <p className='text-red-600'>This is an error!</p>

                <p>Already have an account? <Link className='underline' to='/login'>Login</Link> </p>
            </form>



        </div>

    )
}

export default Register