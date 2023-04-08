import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
    const [value, setValue] = useState('');
    console.log(value);
    return (
        <section className='w-screen min-h-[80vh] flex max-w-screen-lg mx-auto py-10'>

            <aside className='w-2/3'>
                <input type="text" placeholder='Title' />

                {/* react quill */}
                <ReactQuill theme="snow" value={value} onChange={setValue} className='' />
            </aside>


            <aside className='w-1/3'>
                <span>
                    <b>Status </b> Draft
                    <b>Visiblity:</b> Public
                </span>

                <input type="text" name='' id='' />
            </aside>



        </section>
    )
}

export default Write