import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../images/loginLogo.png'
import axios from 'axios'
import { useFormik } from 'formik'
import { registrationSchema } from '../schema/index'
import { BsCloudLightning } from 'react-icons/bs'

const initialValues = { userName: '', email: '', password: '', confirmPassword: '' };
const Register = () => {

    const [formValues, setFormValues] = useState({ userName: '', email: '', password: '', confirmPassword: '' });
    const [response, setResponse] = useState('')
    const navigate = useNavigate()



    const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues, validationSchema: registrationSchema,
        onSubmit: async (values, action) => {
            setResponse('')
            // console.log(1);
            // console.log(action);
            // console.log(values);
            const { confirmPassword, ...others } = values;
            try {
                const res = await axios.post('auth/register', others)
                // console.log(data);
                // console.log(res);
                // setResponse(res.data.message)
                console.log(res);
                setTimeout(() => {
                    navigate('/login')

                }, 4000);
            }
            catch (error) {
                // console.log(error.message);
                console.log(error);
                setResponse(error.response.data.message || error.message)
                // console.log(error.response.data.message);
                // setError(error.response.data.message);
            }


        }

    });

    useEffect(() => {
        // console.log(values);

    }, [values])
    // console.log(touched);

    useEffect(() => {
        // console.log(values);
        console.log('---------');
        // console.log(errors);

    }, [errors])











    return (
        <div name='register' className='b flex flex-col w-screen h-screen'>



            <form className='sm:w-[20rem] md:w-[24rem] xl:w-[28rem] sm:h-[25rem] md:h-[26rem] min-h-[34rem] rounded-[1em] form-card flex flex-col border-2 m-auto  p-10 gap-3 relative items-center' onSubmit={handleSubmit}>
                <img src={Logo} alt="error" className='rounded-2xl w-20 absolute top-[-5%] left-[0]' />
                <h1 className='text-[2.7rem] mx-auto'>SIGNUP</h1>


                <p className='h-32'>
                    <input type="text" placeholder='Your username' className='border-b-2 text-xl px-2 rounded-sm border-b-black h-[2.5rem] w-[80%] focus:outline-none' onChange={handleChange} onBlur={handleBlur} value={values.userName} name='userName' />
                    {errors.userName && touched.userName ? <p className='text-red-600'>{errors.userName}</p> : null}

                </p>
                <p className='h-32'>
                    <input type="email" placeholder='Email' className='border-b-2 text-xl px-2 rounded-sm border-b-black h-[2.5rem] w-[80%] focus:outline-none' onChange={handleChange} onBlur={handleBlur} value={values.email} name='email' />
                    {errors.email && touched.email ? <p className='text-red-600'>{errors.email}</p> : null}

                </p>

                <p className='h-32'>
                    <input type="text" placeholder='Password' className='border-b-2 text-xl px-2 rounded-sm border-b-black h-[2.5rem] w-[80%] focus:outline-none' onChange={handleChange} onBlur={handleBlur} value={values.password} name='password' />
                    {errors.password && touched.password ? <p className='text-red-600'>{errors.password}</p> : null}

                </p>



                <p className='h-32'>
                    <input type="text" placeholder='Confirm password' className='border-b-2 text-xl px-2 rounded-sm border-b-black h-[2.5rem] w-[80%] focus:outline-none' onChange={handleChange} onBlur={handleBlur} value={values.confirmPassword} name='confirmPassword' />
                    {errors.confirmPassword && touched.confirmPassword ? <p className='text-red-600'>{errors.confirmPassword}</p> : null}

                </p>
                <button type='submit' className='border-2 px-12 py-1 bg-[rgb(28,69,175)] text-white rounded-sm border-[rgb(28,69,175)] hover:bg-blue-600 '>Sign up </button>


                {response.length && <p className='text-red-600'>{response}</p>}

                <p>Already have an account? <Link className='underline' to='/login'>Login</Link> </p>
            </form>



        </div >

    )
}

export default Register