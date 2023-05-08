import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Menu = ({ category }) => {
    const [similarPosts, setSimilarPosts] = useState([])




    useEffect(() => {
        const fetchSimilarPosts = async () => {
            try {
                console.log(category);
                const res = await axios.get(`/posts/?category=${category}`)
                // const res = await axios.get(`/posts/?category=science`)
                setSimilarPosts(res.data)
                console.log(res);
            }
            catch (error) {
                console.log(error);
            }

        }
        fetchSimilarPosts()

    }, [category])

    // console.log(posts);
    return (
        <section name='menu' className='border-2 w-1/3 p-6' >
            <h1>Other posts you may like</h1>

            {
                similarPosts.map((post) =>
                    <div className='flex flex-col gap-2 mx-auto w-2/3 py-8' key={post.id} >

                        <img className='w-2/3' src='https://images.unsplash.com/photo-1680695918112-2909e0fc8796?ixlib=rb-4.0.3&ixid=Mn%20%20%20wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt="" />
                        <p>{post.title}</p>
                        <button className='border-2 w-full bg-slate-400' >Read More</button>
                    </div>
                )
            }
        </section>
    )
}

export default Menu