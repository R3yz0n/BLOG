import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
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
    return (
        <section className='' name='home'>

            <div className='flex flex-col gap-5 px-5'>
                {
                    posts.map((post, i) =>
                        <div key={post.id} className={`flex w-3/4 mx-auto gap-10 my-10  ${i % 2 === 0 && 'flex-row-reverse'}`} >
                            {/* <div> */}
                            <img src={post.img} alt="error" className='w-96 img-card rounded-sm b' />
                            {/* </div> */}
                            <div>
                                <Link to={`/post/${post.id}`}>
                                    {post.title}
                                </Link>
                                <p>{post.desc}</p>
                                <button className='border-2 px-2 bg-cyan-400'>Read More</button>
                            </div>
                        </div>
                    )
                }
            </div>


        </section>
    )
}

export default Home