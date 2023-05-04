import React, { useEffect, useState } from 'react'
import { MdEditNote } from 'react-icons/md'
import { AiFillDelete } from 'react-icons/ai'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Menu from '../components/Menu'
import axios from 'axios'
import NotFound from './NotFound'
import moment from 'moment'
import { UserContext } from '../store/AuthContext'

const Single = () => {
    const [post, setPost] = useState({})
    const [userData, setUserData] = useState({})
    const location = useLocation()
    const { currUser } = UserContext()
    const postId = location.pathname.split('/')[2]
    const navigate = useNavigate()

    console.log(moment(post.date).fromNow());


    useEffect(() => {

        const fetchData = async () => {

            try {
                const { data } = await axios.get(`/posts/${postId}`)
                const { user, ...others } = data;
                setUserData(user);
                setPost(others)


            }
            catch (error) {
                console.log(error);

            }


        }
        fetchData();
    }, [postId])


    const handleDelete = async () => {

        console.log('deleted');
        try {
            console.log('here');
            const res = await axios.delete(`/posts/${postId}`)
            console.log(res);

        }
        catch (error) {
            console.log(error);

        }

    }

    return (
        <section className="  w-[80vw] mx-auto min-h-screen border-2 flex" name='single'>

            {
                post.title ? <div className="w-2/3 flex flex-col gap-5">
                    <img className="object-cover w-full max-h-64" alt="hero" src={post.image} />

                    <div className='flex gap-3 w-full'>
                        <img src={userData.image} alt="profile" className='w-10 rounded-full' />

                        <aside>
                            <p>{userData.userName}</p>
                            <p>{moment(post.date).fromNow()}</p>
                        </aside>

                        {
                            currUser?.userName === userData.userName &&
                            <>
                                <Link to={`/write?edit=2`}>  <MdEditNote size={30} color='green' className='cursor-pointer' /></Link>

                                <AiFillDelete size={25} color='red' onClick={handleDelete} className='cursor-pointer' />
                            </>
                        }

                    </div>

                    <article className=' w-full'>
                        <p className=''>{post.title} </p>

                        <p className='leading-8 text-xs w-full'>
                            {post.description}

                        </p>

                    </article>
                </div> :
                    <NotFound />
            }




            <Menu />



        </section >
    )
}

export default Single
