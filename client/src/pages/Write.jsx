import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
    const [value, setValue] = useState('');
    return (
        <section className='w-screen min-h-[80vh] flex max-w-screen-lg mx-auto py-10'>

            <aside className='w-2/3'>
                <input type="text" placeholder='Title' />

                {/* react quill */}
                <ReactQuill theme="snow" value={value} onChange={setValue} className='' />
            </aside>


            <aside className='w-1/3'>
                <p>Publish</p>
                <p>Status:Draft</p>
            </aside>



        </section>
    )
}

export default Write