import React from 'react'
import {SiWebtrees} from "react-icons/si";
import {MdOutlineAppShortcut} from "react-icons/md";
import {SiCyberdefenders} from "react-icons/si";

export default function Plans() {
  return (
    <div className='max-w-[1240px] my-16 px-5 py-[7px]'>
      <div className="md:grid hover:cursor-pointer grid-cols-3 gap-12">

        
        <div className="shadow-xl self-center  text-center py-4 my-4 bg-slate-100 hover:scale-105 duration-[350ms] h-[435px]">
          <SiWebtrees className='mx-auto'/>
          <h1 className='text-center font-bold p-4 text-2xl'>Web Development</h1>
          <h1 className='text-center font-bold p-1 text-2xl'>$149</h1>
          <p className='text-center text-lg justify-between p-2font-normal my-9 '>Lorem ipsum dolor sit consectetur <hr /> adipisicing elit. Sapiente, in?Doloremque cumque reprehenderit adipisicing elit <hr />voluptas nesciunt tempore!</p>
          <button className='text-black rounded hover:drop-shadow-2xl p-2 font-bold bg-[#00df9a] w-[35%]'>Start Trial</button>
        </div>

        <div className="shadow-xl  text-center py-4 my-4 bg-slate-100 hover:scale-105 duration-[350ms] h-[435px]">
        <MdOutlineAppShortcut className='mx-auto'/>
          <h1 className='text-center font-bold p-4 text-2xl'>App Development</h1>
          <h1 className='text-center font-bold p-1 text-2xl'>$149</h1>
          <p className='text-center text-lg justify-between p-2font-normal my-9 '>Lorem ipsum dolor sit consectetur <hr /> adipisicing elit. Sapiente, in?Doloremque cumque reprehenderit adipisicing elit <hr />voluptas nesciunt tempore!</p>
          <button className='text-black rounded hover:drop-shadow-2xl p-2 font-bold bg-[#00df9a] w-[35%]'>Start Trial</button>
        </div>

        <div className="shadow-xl  text-center py-4 my-4 bg-slate-100 hover:scale-105 duration-[350ms] h-[435px]">
          <SiCyberdefenders className='mx-auto'/>
          <h1 className='text-center font-bold p-4 text-2xl'>Cyber Security</h1>
          <h1 className='text-center font-bold p-1 text-2xl'>$149</h1>
          <p className='text-center text-lg justify-between p-2font-normal my-9 '>Lorem ipsum dolor sit consectetur <hr /> adipisicing elit. Sapiente, in?Doloremque cumque reprehenderit adipisicing elit <hr />voluptas nesciunt tempore!</p>
          <button className='text-black rounded hover:drop-shadow-2xl p-2 font-bold bg-[#00df9a] w-[35%]'>Start Trial</button>
        </div>

        
      </div>
    </div>
  )
}
