import React from 'react'
import { MdEditNote } from 'react-icons/md'
import { AiFillDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
    return (
        <section className="  w-[80vw] mx-auto min-h-screen border-2 flex" name='single'>


            <div className="w-2/3 flex flex-col gap-5">
                <img className="object-cover w-full max-h-64" alt="hero" src="https://images.unsplash.com/photo-1680695918112-2909e0fc8796?ixlib=rb-4.0.3&ixid=Mn%20%20%20wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />

                <div className='flex gap-3 w-full'>
                    <img src="https://dummyimage.com/720x600" alt="profile" className='w-10 rounded-full' />

                    <aside>
                        <p>John</p>
                        <p>Posted 2days ago</p>
                    </aside>

                    <Link to={`/write?edit=2`}>  <MdEditNote size={30} color='green' /></Link>

                    <AiFillDelete size={25} color='red' />

                </div>

                <article className=' w-full'>
                    <p className=''>
                        Lorem ipsum dolor s trum in voluptates minus erasi neque non consectetur.
                    </p>

                    <p className='leading-8 text-xs w-full'>
                        Lorem, ipsum dolor it amet consectetur adipisicing elit. Commodi suscipit possimus sint id, excepturi
                        esse expedita, saepe quae consequuntur, cupiditate recusandae. Laudantium eveniet molestiae facere, ullam optio mollitia tempora aut.
                        Debitis corporis aliquid laboriosam voluptatibus mollitia repellendus quidem culpa veniam consequuntur,
                        aut numquam beatae ullam necessitatibus perspiciatis nulla modi, tenetur, quia dolorem impedit nisi! Harum minus magni dolorum numquam nemo?
                        Nobis quasi voluptatum uis nulla minus quia deleniti, facilis illo cupiditate consectetur consequatur
                        reiciendis natus porro officia eveniet optio magnam non est dolorum beatae soluta! Sapiente sunt fuga molestiae placeat.

                    </p>

                </article>
            </div>

            <Menu />



        </section>
    )
}

export default Single
