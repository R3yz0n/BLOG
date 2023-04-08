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

                <article className='w-2/3 w-full'>
                    <p className=''>
                        Lorem ipsum dolor s trum in voluptates minus erasi neque non consectetur.
                    </p>

                    <p className='leading-8 text-xs w-full'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi suscipit possimus sint id, excepturi
                        esse expedita, saepe quae consequuntur, cupiditate recusandae. Laudantium eveniet molestiae facere, ullam optio mollitia tempora aut.
                        Debitis corporis aliquid laboriosam voluptatibus mollitia repellendus quidem culpa veniam consequuntur,
                        aut numquam beatae ullam necessitatibus perspiciatis nulla modi, tenetur, quia dolorem impedit nisi! Harum minus magni dolorum numquam nemo?
                        Nobis quasi voluptatum quis nulla minus quia deleniti, facilis illo cupiditate consectetur consequatur
                        reiciendis natus porro officia eveniet optio magnam non est dolorum beatae soluta! Sapiente sunt fuga molestiae placeat.

                    </p>

                </article>
            </div>

            <Menu />



        </section>
    )
}

export default Single
{/* <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Microdosing synth tattooed vexillologist</h1>
                    <p className="leading-relaxed mb-8">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Button</button>
                    </div>
                </div> */}