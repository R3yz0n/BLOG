import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../images/loginLogo.png'
import axios from 'axios'

const Register = () => {
    const [formValues, setFormValues] = useState({ userName: '', email: '', password: '' });
    const [error, setError] = useState('')
    const [sucess, setSucess] = useState(false)
    const navigate = useNavigate()

    const changeHandler = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
        // console.log(formValues);


    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('auth/register', formValues)
            // console.log(data);
            console.log(res);
            setSucess(true)
            setTimeout(() => {
                navigate('/login')

            }, 1000);
        }
        catch (error) {
            console.log(error);
            console.log(error.response.data.message);
            setError(error.response.data.message);
        }



    }
    return (
        <div name='register' className='b flex flex-col w-screen h-screen'>



            <form className='sm:w-[20rem] md:w-[24rem] xl:w-[28rem] sm:h-[25rem] md:h-[26rem] xl:h-[30rem] rounded-[1em] form-card flex flex-col border-2 m-auto  p-10 gap-4 relative items-center'>
                <img src={Logo} alt="error" className='rounded-2xl w-20 absolute top-[-5%] left-[0]' />
                <h1 className='text-[2.7rem] mx-auto'>SIGNUP</h1>


                <input type="text" placeholder='Username' className=' text-center h-[2.5rem] w-[70%]' onChange={changeHandler} value={formValues.userName} name='userName' />
                <input type="email" placeholder='Email' className='text-center h-[2.5rem] w-[70%]' onChange={changeHandler} value={formValues.email} name='email' />
                <input type="text" placeholder='Password' className='text-center h-[2.5rem]  w-[70%]' onChange={changeHandler} value={formValues.password} name='password' />

                <button className='text-center  p-[0.9rem] h-[3rem] w-[38%] ' onClick={submitHandler}>SIGNUP</button>
                {error.length && <p className='text-red-600'>{error}</p>}
                {sucess && <p className='text-red-600'>User sucessully created !</p>}
                <p>Already have an account? <Link className='underline' to='/login'>Login</Link> </p>
            </form>



        </div>

    )
}

export default Register