import React from 'react'

const Menu = () => {
    const posts = [
        {
            id: 1,
            title: 'Lorem ipusum sit ames slaasdfj slsafjasm consector',
            desc: 'Lorem ipusum sit ames slaasdfj slsafjasm consector Lorem ipusum sit ames slaasdfj slsafjasm consector Lorem ipusum sit ames slaasdfj slsafjasm consector Lorem ipusum sit ames slaasdfj slsafjasm consector Lorem ipusum sit ames slaasdfj slsafjasm consector',
            img: 'https://images.unsplash.com/photo-1680695918112-2909e0fc8796?ixlib=rb-4.0.3&ixid=Mn   wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

        },
        {
            id: 1,
            title: 'Lorem ipusum sit ames slaasdfj slsafjasm consector',
            desc: 'Lorem ipusum sit ames slaasdfj slsafjasm consector Lorem ipusum sit ames slaasdfj slsafjasm consector Lorem ipusum sit ames slaasdfj slsafjasm consector Lorem ipusum sit ames slaasdfj slsafjasm consector Lorem ipusum sit ames slaasdfj slsafjasm consector',
            img: 'https://images.unsplash.com/photo-1680695918112-2909e0fc8796?ixlib=rb-4.0.3&ixid=Mn   wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

        },
        {
            id: 1,
            title: 'Lorem ipusum sit ames slaasdfj slsafjasm consector',
            desc: 'Lorem ipusum sit ames slaasdfj slsafjasm consector Lorem ipusum sit ames slaasdfj slsafjasm consector Lorem ipusum sit ames slaasdfj slsafjasm consector Lorem ipusum sit ames slaasdfj slsafjasm consector Lorem ipusum sit ames slaasdfj slsafjasm consector',
            img: 'https://images.unsplash.com/photo-1680695918112-2909e0fc8796?ixlib=rb-4.0.3&ixid=Mn   wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

        },
        {
            id: 1,
            title: 'Lorem ipusum sit ames slaasdfj slsafjasm consector',
            desc: 'Lorem ipusum sit ames slaasdfj slsafjasm consector Lorem ipusum sit ames slaasdfj slsafjasm consector Lorem ipusum sit ames slaasdfj slsafjasm consector Lorem ipusum sit ames slaasdfj slsafjasm consector Lorem ipusum sit ames slaasdfj slsafjasm consector',
            img: 'https://images.unsplash.com/photo-1680695918112-2909e0fc8796?ixlib=rb-4.0.3&ixid=Mn   wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

        },

    ]
    console.log(posts);
    return (
        <section name='menu' className='border-2 w-1/3 p-6' >
            <h1>Other posts you may like</h1>

            {
                posts.map((post) =>
                    <div className='flex flex-col gap-2 mx-auto w-2/3 py-8' >

                        <img className='w-2/3' src='https://images.unsplash.com/photo-1680695918112-2909e0fc8796?ixlib=rb-4.0.3&ixid=Mn%20%20%20wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt="" />
                        <p>TITLe</p>
                        <button className='border-2 w-full bg-slate-400' >Read More</button>
                    </div>
                )
            }
        </section>
    )
}

export default Menu