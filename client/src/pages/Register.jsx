import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/loginLogo.png'

const Register = () => {
    return (
        <div name='register' className='b flex flex-col w-screen h-screen'>



            <form className='sm:w-[20rem] md:w-[24rem] xl:w-[28rem] sm:h-[25rem] md:h-[26rem] xl:h-[30rem] rounded-[1em] form-card flex flex-col border-2 m-auto  p-10 gap-4 relative items-center'>
                <img src={Logo} alt="error" className='rounded-2xl w-20 absolute top-[-5%] left-[0]' />
                <h1 className='text-[2.7rem] mx-auto'>SIGNUP</h1>


                <input type="text" placeholder='Username' className=' text-center h-[2.5rem] w-[70%]' />
                <input type="email" placeholder='Email' className='text-center h-[2.5rem] w-[70%]' />
                <input type="text" placeholder='Password' className='text-center h-[2.5rem]  w-[70%]' />

                <button className='text-center  p-[0.9rem] h-[3rem] w-[38%] '>SIGNUP</button>
                <p className='text-red-600'>This is an error!</p>

                <p>Already have an account? <Link className='underline' to='/login'>Login</Link> </p>
            </form>



        </div>

    )
}

export default Register