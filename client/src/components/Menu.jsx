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

                console.log(res);
                console.log(res);
                // others.img = 
                for (let i = 0; i < res.data.length; i++) {
                    // console.log(res.data[i]);
                    res.data[i].img = `http://localhost:4000/${res.data[i].image}`

                    console.log(res.data[i]);

                }
                setSimilarPosts(res.data)
                console.log(similarPosts);
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

                        <img className='w-2/3' src={post.img} alt="error" />
                        <p>{post.title}</p>
                        <button className='border-2 w-full bg-slate-400' >Read More</button>
                    </div>
                )
            }
        </section>
    )
}

export default Menu