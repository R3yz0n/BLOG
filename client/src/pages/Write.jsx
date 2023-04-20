import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Button from '../components/Button'

const Write = () => {
    const [value, setValue] = useState('');
    console.log(value);
    return (
        <section className='w-screen min-h-[80vh] flex max-w-screen-lg mx-auto py-10 gap-5'>

            <aside className='w-2/3 h-full'>
                <input type="text" placeholder='Title' />

                {/* react quill */}
                <ReactQuill theme="snow" value={value} onChange={setValue} className='h-96 overflow-y-auto border-2' />
            </aside>


            <div className='w-1/3 text-sm border-2'>
                <span>
                    <b>Status </b> Draft
                    <b>Visiblity:</b> Public
                </span>

                <input type="file" name='' id='file' placeholder='test' className='w-15' />

                <label htmlFor="file">Upload Image</label>

                <aside className='flex gap-3'>
                    <Button className='px-4' >Save as draft</Button>
                    <Button className='px-4' >Update</Button>
                </aside>

                <aside className='py-3 flex flex-col px-4' >

                    <h1>Category</h1>
                    <input type="radio" name='sagar' value='art' id='art' />
                    <label htmlFor="art">Art</label>

                    <input type="radio" name='sagar' value='science' id='science' />
                    <label htmlFor="science">Science</label>

                    <input type="radio" name='sagar' value='technology' id='technology' />
                    <label htmlFor="technology">Technology</label>

                    <input type="radio" name='sagar' value='cinema' id='cinema' />
                    <label htmlFor="cinema">Cinema</label>

                    <input type="radio" name='sagar' value='food' id='food' />
                    <label htmlFor="food">Food</label>

                    <input type="radio" name='sagar' value='design' id='design' />
                    <label htmlFor="design">Design</label>


                </aside>


            </div>





        </section>
    )
}

export default Write