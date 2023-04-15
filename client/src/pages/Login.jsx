import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (

        <div name='login' className='b flex flex-col w-screen h-screen'>


            <form className='flex flex-col sm:w-[20rem] md:w-[20rem]  border-2 m-auto sm:h-[25rem]  p-10 gap-6 shadow-2xl form-card rounded-[1em]'>
                <h1 className='text-[2rem] mx-auto font-mono '>Login</h1>

                <input type="text" placeholder='USERNAME' className=' text-center mx-auto w-[100%] h-[3rem]' />
                <input type="text" placeholder='PASSWORD' className=' text-center mx-auto w-[100%] h-[3rem]' />

                <button className='mx-auto w-full text-[#203b67] h-[3rem] border-2'>LOGIN</button>
                <p className='text-red-600 mx-auto my-[-2px]'>This is an error!</p>

                <p className='mx-auto'> Don't have an account? <Link className='underline' to='/register'> Register</Link> </p> 

            </form>


        </div>

    )
}

export default Login