import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../store/AuthContext'


const Home = () => {

    const { token } = UserContext()
    const [posts, setPosts] = useState([])
    const category = useLocation().search;
    const navigate = useNavigate('')

    useEffect(() => {


        const fetchData = async () => {
            try {
                const res = await axios.get(`/posts${category}`,
                    //  { headers: { Authorization: token } }
                )
                setPosts(res.data)
                // console.log(res.data);
            }
            catch (err) {
                console.log(err);
                // navigate('/login')

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
                            {/* <img src={post.image} alt="error" className='w-96 img-card rounded-sm b' /> */}
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