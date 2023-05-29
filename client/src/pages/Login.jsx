
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsEyeFill } from 'react-icons/bs'
import { ImUser } from 'react-icons/im'
import axios from 'axios'
import { useFormik } from 'formik'
import { loginSchmea } from '../schema'
import { UserContext } from '../store/AuthContext'
const apiUrl = process.env.REACT_APP_API_URL;

const initialValues = { userName: '', password: '' };

const Login = () => {
    const { currUser, login } = UserContext()
    const navigate = useNavigate();
    const [response, setResponse] = useState('')

    const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues, validationSchema: loginSchmea,
        onSubmit: async (values, action) => {
            setResponse('')
            // console.log(values);
            try {
                const res = await axios.post(`${apiUrl}auth/login`, values)
                // console.log(data);
                console.log(res);
                // setResponse(res.data.message)
                login(res.data);

                setTimeout(() => {
                    navigate('/')

                }, 400);
            }
            catch (error) {
                // console.log(error.message);
                console.log(error);
                setResponse(error.response.data.message || error.message)
                // console.log(error.response.data.message);
                console.log(error.response.data.message || error.message);
                // setError(error.response.data.message);
            }


        }

    });
    // console.log(currUser);
    // console.log(login);
    // console.log(values);



    return (

        <div name='login' className='b flex flex-col w-screen h-screen'>



            <form className='flex flex-col sm:w-[30rem] md:w-[50rem]  border-2 m-auto sm:min-h-[25rem]  p-10 gap-6 shadow-2xl  rounded-[1em]' onSubmit={handleSubmit}>

                <section className='flex md:w-[95%] gap-[5rem] m-auto'>
                    <div className='  w-[50%]'>
                        <img src="http://inmas-rangpur.org/Content/img/signin-image.jpg" alt="error404" />


                        <p className='mx-auto flex text-end h-[4rem]'>



                            <span className='flex flex-col justify-end'> Don't have an account? </span>

                            <Link className='underline flex flex-col justify-end ' to='/register'> Register</Link>



                        </p>

                    </div>



                    <div className='w-[50%]'>
                        <h1 className='text-[2.1rem] mx-auto font-[900] font-sans'> Log In</h1>


                        <div className='flex flex-col space-y-[2rem] h-[8rem] '>




                            <aside>
                                <input type="text" placeholder='Your Name' className=' border-b-2 border-[#908c8ca0]  w-[100%] h-[2rem] mt-[2rem] outline-none' name='userName'
                                    value={values.userName} onChange={handleChange} onBlur={handleBlur} />
                                {errors.userName && touched.userName ? <p className='text-red-600'>{errors.userName}</p> : null}
                            </aside>

                            <aside>
                                <input type="text" placeholder='Password' className=' border-b-2 border-[#908c8ca0] w-[100%] h-[2rem outline-none' name='password' value={values.password}
                                    onChange={handleChange} onBlur={handleBlur} />
                                {errors.password && touched.password ? <p className='text-red-600'>{errors.password}</p> : null}
                            </aside>

                            <p className='my-[1.4rem]'> <input type="checkbox" /> Remember me </p>
                            {response.length !== 0 && <p className='text-red-600 mx-auto my-[-2px]'>{response}</p>}

                            <button className='mx-auto w-full py-2 mt-[0.5rem] rounded-[0.5rem] text-white h-[3.4rem] border-2 bg-[#70abe6]' type='submit'>Log in</button>
                        </div>



                    </div>

                </section>







            </form>


        </div>

    )
}

export default Login