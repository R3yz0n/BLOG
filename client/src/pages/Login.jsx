import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
    return (

        <div name='login' className='b flex flex-col w-screen h-screen'>


{/* changed */}
            <form className='flex flex-col w-1/3 border-2 m-auto h-[400px] p-10 gap-4'>
                <h1 className='text-xl mx-auto'>Login</h1>

                <input type="text" placeholder='Username' className='border-b-[1px] border-black px-3 w-2/3' />
                <input type="text" placeholder='password' className='border-b-[1px] border-black px-3 w-2/3' />

                <button className='w-20 border-2'>Login</button>
                <p className='text-red-600'>This is an error!</p>

                <p>Don't have an account? <Link className='underline' to='/register'> Register</Link> </p>
            </form>



        </div>

    )
}

export default Login