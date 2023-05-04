import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie';


const Home = () => {

    const [posts, setPosts] = useState([])
    const category = useLocation().search;
    // const myCookie = Cookies.get("access_token")
    Cookies.set('myCookie', 'cookieValue', { expires: 7 });
    const cookieValue = Cookies.get('access_token');
    console.log(cookieValue); // logs "cookieValue"




    useEffect(() => {


        const fetchData = async () => {
            try {
                const res = await axios.get(`/posts${category}`)
                setPosts(res.data)
                // console.log(res.data);
            }
            catch (err) {
                console.log(err);
            }

        }
        fetchData()

    }, [category])
    return (
        <section className='' name='home'>

            <div className='flex flex-col gap-5 px-5'>
                {
                    posts.map((post, i) =>
                        <div key={post.id} className={`flex w-3/4 mx-auto gap-10 my-10  ${i % 2 === 0 && 'flex-row-reverse'}`} >
                            {/* <div> */}
                            <img src={post.image} alt="error" className='w-96 img-card rounded-sm b' />
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