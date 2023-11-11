import React from 'react'
import laptop from "../assets/intro.png"

export default function Experts(){
    return(
        <div className='md:max-w-[1240px] mx-auto my-16 pb-14 md:grid grid-cols-3'>
            <div className="text-center md:h-[180px] col-span-1 md:w-[80%]">
                <img className='inline md:w-[288px] md:ml-1.5' src={laptop} alt="" />
            </div>
            <div className="justify-center  text-center col-span-2 md:flex flex-col my-9 h-[200px] ">
                <h1 className=' text-[#00df9a] text-2xl font-bold my-3'>LEARN FROM EXPERTS</h1>
                <p className='my-2 text-justify font-sans px-1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quia dignissimos accusamus inventore reprehenderit qui, expedita enim animi atque nisi dolorum aspernatur quasi repellendus, maiores iusto corrupti perspiciatis amet voluptatem a. Inventore, consequuntur. Incidunt velit quibusdam et vel laudantium architecto?
                </p>
                <button className='place-self-center hover:drop-shadow-2xl md:w-[25%] bg-[#00df9a] text-black font-bold p-3 my-2 rounded '>Learn More </button>
            </div>

        </div>
    )
}