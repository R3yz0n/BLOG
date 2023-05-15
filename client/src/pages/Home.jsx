import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../store/AuthContext'


const Home = () => {

    const apiUrl = process.env.REACT_APP_API_URL;
    const { token } = UserContext()
    const [posts, setPosts] = useState([])
    const category = useLocation().search;
    const navigate = useNavigate('')


    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent;


    }

    useEffect(() => {


        const fetchData = async () => {
            try {
                const res = await axios.get(`${apiUrl}posts${category}`,
                    // { headers: { Authorization: token } }
                )
                setPosts(res.data)
                console.log(res.data);

                for (let i = 0; i < res.data.length; i++) {
                    console.log(res.data[i].image);

                    res.data[i].img = `${apiUrl}files/${res.data[i].image}`;

                    setPosts(res.data)
                    // console.log(getImg);
                    console.log(res.data[i].img);
                }
            }
            catch (err) {
                console.log(err);
                // navigate('/login')

            }

        }
        fetchData()
        console.log(posts);

    }, [category])
    console.log(posts);
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
                                <Link to={`/posts/${post.id}`} className='text-xl '>
                                    <p className='py-2'>
                                        {post.title}
                                    </p>
                                </Link>
                                {/* <div dangerouslySetInnerHTML={{ __html: post.description }} /> */}
                                <p className='text-sm'>{getText(post.description)}</p>
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