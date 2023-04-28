import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsEyeFill } from 'react-icons/bs'
import { ImUser } from 'react-icons/im'
import axios from 'axios'
// import { } from 'react-icons/'
// import { } from 'react-icons/'
const Login = () => {
    const [formValues, setFormValues] = useState({ userName: '', password: '' });
    const navigate = useNavigate()

    const changeHandler = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
        // console.log(formValues);

    }

    const submitHandler = async (e) => {
        console.log(1);
        e.preventDefault();
        try {
            const res = await axios.post('auth/login', formValues)
            // console.log(res.data);
            console.log(res);

            navigate('/')
        }
        catch (error) {
            // console.log(error);
            console.log(error.response.data.message);
        }


    }

    return (

        <div name='login' className='b flex flex-col w-screen h-screen'>


            <form className='flex flex-col sm:w-[30rem] md:w-[50rem]  border-2 m-auto sm:h-[25rem]  p-10 gap-6 shadow-2xl form-card rounded-[1em]'>

                <section className='flex md:w-[95%] gap-[5rem] m-auto'>
                    <div className='w-[50%]'>
                        <img src="http://inmas-rangpur.org/Content/img/signin-image.jpg" alt="error404" />
                    </div>



                    <div className='w-[50%]'>
                        <h1 className='text-[2.1rem] mx-auto font-[900] font-sans'>Log In</h1>


                        <div className='flex flex-col space-y-[2rem] h-[8rem]'>



                            <ImUser />   <input type="text" placeholder='Your Name' className=' border-b-2 border-[#908c8ca0]  w-[100%] h-[2rem] mt-[2rem]' name='userName' value={formValues.userName} onChange={changeHandler} />

                            <input type="text" placeholder='Password' className=' border-b-2 border-[#908c8ca0] w-[100%] h-[2rem' name='password' value={formValues.password} onChange={changeHandler} />


                        </div>

                        <p className='my-[1.4rem]'> <input type="checkbox" /> Remember me </p>

                        <button className='mx-auto w-[7.5rem] mt-[0.5rem] rounded-[0.5rem] text-white h-[3.4rem] border-2 bg-[#70abe6]' onClick={submitHandler}>Log in</button>
                    </div>

                </section>



                <p className='text-red-600 mx-auto my-[-2px]'>This is an error!</p>

                <p className='mx-auto'> Don't have an account? <Link className='underline' to='/register'> Register</Link> </p>

            </form>


        </div>

    )
}

export default Login