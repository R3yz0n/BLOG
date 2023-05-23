
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa'
import { AiFillLock } from 'react-icons/ai'
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



            <form className='flex  sm:min-h-[35rem] sm:min-w-[30rem] md:w-[50rem] w-[20rem] h-[35rem]  border-2 m-auto sm:p-10 md:gap-6 shadow-2xl  rounded-[1em]' onSubmit={handleSubmit}>

                <section className='h-[32rem] min-w-fit flex md:flex-row flex-col md:w-[95%] md:gap-[5rem] m-auto'>
                   
                   
                    <div className='ml-[10rem] sm:ml-[15rem] md:ml-[0rem] w-[6rem] md:w-[50%]'>
                        <img src="http://inmas-rangpur.org/Content/img/signin-image.jpg" alt="error404" />


                        
                    </div>



                    <div className=' md:w-[50%]'>
                        <h1 className='text-[2.1rem] mx-auto font-[900] font-sans'>Log In</h1>


                        <div className='flex flex-col space-y-[2rem] h-[8rem] '>

                           <aside>


                            <p className='  flex gap-[1.5rem] border-b-2 border-[#908c8ca0] mt-[2rem]  '>
                
                           
                            <FaUserAlt className='h-[2rem]  ' />  <input type="text" placeholder='Email' className=' outline-none' name='userName'
                                    value={values.userName} onChange={handleChange} onBlur={handleBlur} />
                        
                            </p>
                           
                        
                            {errors.userName && touched.userName ? <p className='  text-red-600'>{errors.userName}</p> : null}
                          
                            </aside>
                          
                          
                          
                          
                            <aside>
                               
                               <p className='flex gap-[1.3rem] border-b-2 border-[#908c8ca0]'>



                           < AiFillLock className=' h-[2rem] w-[1.2rem]'/>
                                <input type="text" placeholder='Password' className='  outline-none' name='password' value={values.password}
                                    onChange={handleChange} onBlur={handleBlur} />
                               
                          
            
                                </p>
                          
                          
                                {errors.password && touched.password ? <p className='text-red-600'>{errors.password}</p> : null}
                          
                            </aside>

                         
                         
                         
                         
                         
                         
                         
                            <p className='my-[1.4rem]'> <input type="checkbox" /> Remember me </p>
                            {response.length !== 0 && <p className='text-red-600 mx-auto my-[-2px]'>{response}</p>}

                            <button className='mx-auto w-full py-2 mt-[0.5rem] rounded-[0.5rem] text-white h-[3.4rem] border-2 bg-[#70abe6]' type='submit'>Log in</button>



                            <p className='-mt-3 flex text-end h-[4rem]'>



                            <span className='flex flex-col justify-end'> Don't have an account? </span>

                            <Link className='underline flex flex-col justify-end ' to='/register'> Register</Link>



                        </p>

                        </div>



                    </div>

                </section>







            </form>


        </div>

    )
}

export default Login