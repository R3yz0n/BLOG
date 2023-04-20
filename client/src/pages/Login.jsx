import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa'
import { AiFillLock } from 'react-icons/ai'
import { BsEyeFill } from 'react-icons/bs'
const Login = () => {
    return (

        <div name='login' className='b flex flex-col w-screen h-screen'>


            <form className='flex flex-col sm:w-[30rem] md:w-[50rem]  border-2 m-auto sm:h-[35rem]  p-10 gap-6 shadow-2xl form-card rounded-[1em]'>

                <section className='flex md:w-[95%] gap-[5rem] m-auto'>
                    <div className='  w-[50%]'>
                        <img src="http://inmas-rangpur.org/Content/img/signin-image.jpg" alt="error404" />


                        <p className='mx-auto flex text-end h-[4rem]'>



                            <span className='flex flex-col justify-end'> Don't have an account? </span>

                            <Link className='underline flex flex-col justify-end ' to='/register'> Register</Link>



                        </p>

                    </div>






                    <div className='w-[50%]'>
                        <h1 className='text-[2.1rem] mx-auto font-[900] font-sans'>Log In</h1>


                        <div className='flex flex-col space-y-[2rem] h-[8rem]'>



                            <p className='  mt-[2rem] flex border-b-2 border-[#908c8ca0] '>


                                <FaUserAlt />

                                <input type="text" placeholder='Your Name' className='  h-
                                [2rem] ml-[1.3rem]' />

                            </p>



                            <p className='flex border-b-2 border-[#908c8ca0]'>


                                <AiFillLock size='1.3rem' />

                                <input type="text" placeholder='Password' className=' ml-[1.3rem] h-[2rem' /> <BsEyeFill/>


                            </p>

                        </div>

                        <p className='my-[1.4rem]'> <input type="checkbox" /> Remember me </p>

                        <button className='mx-auto w-[7.5rem] mt-[0.5rem] rounded-[0.5rem] text-white h-[3.4rem] border-2 bg-[#70abe6]'>Log in</button>


                        <p className='text-red-600 my-[5rem]'>This is an error!</p>


                    </div>

                </section>






            </form>


        </div>

    )
}

export default Login