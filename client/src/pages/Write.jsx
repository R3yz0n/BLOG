import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Button from '../components/Button'
import { useFormik } from 'formik';
import axios from 'axios';
import { writePostSchema } from '../schema';
import { UserContext } from '../store/AuthContext';


const initialValues = { title: '', description: '', image: '', category: '' };

const Write = () => {
    const { token, currUser } = UserContext()
    const [file, setFile] = useState(null);
    // console.log(file);

    const fileHandler = (e) => {
        setFile(e.target.files[0])
        console.log(file);



    }


    const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues, validationSchema: writePostSchema,

        onSubmit: async (values, action) => {
            // setResponse('')
            console.log(1);
            const formData = new FormData();

            formData.append('file', file);
            try {
                // console.log(formData);
                const fileRes = await axios.post('files/uploads', formData,
                    { headers: { Authorization: `Bearer ${token}` } }
                )
                console.log(fileRes);
                // setResponse(res.data.message)
                values.image = fileRes.data.url
                values.uid = currUser.id
                // values.image = 'fuck u'
                // console.log(values);
                const res = await axios.post('posts', values,
                    { headers: { Authorization: `Bearer ${token}` } }
                )
                console.log(res);

            }
            catch (error) {
                // console.log(error.message);
                // console.log(error);
                console.log(error.response.data.message);
                // console.log(error);
                // setResponse(error.response.data.message || error.message)
                // console.log(error.response.data.message);
                // setError(error.response.data.message);
            }


        }



    });


    useEffect(() => {
        // console.log(values);
        // console.log(errors);

    }, [errors])


    // console.log(description);
    return (
        <form className='w-screen min-h-[80vh] flex max-w-screen-lg mx-auto py-10 gap-5' onSubmit={handleSubmit} >

            <aside className='w-2/3 h-full'>
                <input type="text" placeholder='Title' value={values.title} onChange={handleChange} name='title' onBlur={handleBlur} />
                {errors.title && touched.title ? <p className='text-red-600'>{errors.title}</p> : null}

                <ReactQuill theme="snow" value={values.description} onChange={(newValue) => handleChange({ target: { name: "description", value: newValue } })}
                    className='h-96 overflow-y-auto border-2' name='description' onBlur={() => handleBlur({ target: { name: 'description' } })} />
                {errors.description && touched.description ? <p className='text-red-600'>{errors.description}</p> : null}
            </aside>


            <div className='w-1/3 text-sm border-2'>
                <span>
                    <b>Status </b> Draft
                    <b>Visiblity:</b> Public
                </span>

                <input type="file" name='file' id='file' placeholder='image' className='w-15' onChange={fileHandler} />

                <label htmlFor="file">Upload Image</label>

                <aside className='flex gap-3'>
                    <Button className='px-4' >Save as draft</Button>
                    <Button className='px-4'>Update</Button>
                </aside>

                <button type='submit'>Publish</button>


                <aside className='py-3 flex flex-col px-4' >

                    <h1>Category</h1>
                    {errors.category && touched.category ? <p className='text-red-600'>{errors.category}</p> : null}
                    <input type="radio" name='category' onChange={handleChange} onBlur={handleBlur} value='art' id='art' />
                    <label htmlFor="art">Art</label>

                    <input type="radio" name='category' onChange={handleChange} onBlur={handleBlur} value='science' id='science' />
                    <label htmlFor="science">Science</label>

                    <input type="radio" name='category' onChange={handleChange} onBlur={handleBlur} value='technology' id='technology' />
                    <label htmlFor="technology">Technology</label>

                    <input type="radio" name='category' onChange={handleChange} onBlur={handleBlur} value='cinema' id='cinema' />
                    <label htmlFor="cinema">Cinema</label>

                    <input type="radio" name='category' onChange={handleChange} onBlur={handleBlur} value='food' id='food' />
                    <label htmlFor="food">Food</label>

                    <input type="radio" name='category' onChange={handleChange} onBlur={handleBlur} value='design' id='design' />
                    <label htmlFor="design">Design</label>


                </aside>




            </div>





        </form>
    )
}

export default Write