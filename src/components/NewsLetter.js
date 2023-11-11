import React from 'react'

export default function NewsLetter() {
  return (
    <div className='bg-[#2699fb] p-2'>
        <div className="max-w-[1240px] mx-auto md:flex justify-between py-[20px]">
            <div className='m-2'>
                <h1 className='text-[20px] md:text-[40px] font-bold text-white'>Want to learn latest IT skills?</h1>
                <span className='text-white'>
                    Sign up to our newsletter and stay up to date.
                </span>
            </div>
            <div className='my-3 m-2 '>
                <input placeholder=' example@gmail.com' className='py-3 my-2 mb-2 rounded mr-2 text-slate-600' type="text" name="" id="" />
                <button className='hover:drop-shadow-2xl bg-black text-white p-3 rounded'> Sign up </button>
                <br />
                <p className='text-white'>We care about the protection of yur data.<br/> Read our <a href="" className='text-black'> Privacy Policy</a></p>
            </div>
        </div>
    </div>
  )
}
