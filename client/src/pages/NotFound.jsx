import React from 'react'

const NotFound = () => {
    return (
        <section className='w-full'>

            <div className='flex flex-col items-center py-20'>
                <p>PAGE NOT FOUND</p>
                <p className='text-4xl'>404</p>
                <p className='text-3xl'>Out of nothing, something.</p>

            </div>
            <p>
                You can find (just about) anything on Medium — apparently even a page
                that doesn’t exist. Maybe these stories about finding what you didn’t know
                you were looking for will take you somewhere new?
            </p>

        </section>
    )
}

export default NotFound