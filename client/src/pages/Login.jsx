import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
    return (

        <div name='login' className='b flex flex-col w-screen h-screen'>


{/* changed */}
            <form className='flex flex-col w-[33em] border-2 m-auto h-[30em] p-10 gap-6 shadow-2xl form-card rounded-[1em]'>
                <h1 className='text-[2.5rem] mx-auto font-mono '>LOGIN</h1>

                <input type="text" placeholder='USERNAME' className=' text-center mx-auto w-[80%] h-[3em]' />
                <input type="text" placeholder='PASSWORD' className=' text-center mx-auto w-[80%] h-[3em]' />

                <button className='mx-auto w-[40%] h-[3em] border-2'>LOGIN</button>
                <p className='text-red-600 mx-auto my-[-2px]'>This is an error!</p>

                <p className='mx-auto'> Don't have an account? <Link className='underline' to='/register'> Register</Link> </p> 

            </form>

{/* . */}

        </div>

    )
}

export default Login