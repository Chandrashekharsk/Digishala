import React from 'react'
import Typed from 'react-typed';

export default function Banner(){
    return (
        <div className='bg-[#2699fb] w-full py-[2px]'>
            <div className="max-w-[1240px] my-[100px] font-bold text-center mx-auto ">
                <div className='m-3 text-xl md:text-3xl md:p-[24px] '>Learn With Us</div>
                <div className='m-3  text-3xl md:text-[80px] md:p-[24px] '>Grow With Us</div>
                <div className='m-3 text-[20px] text-white md:text-[50px]  md:p-[24px] '>
                Learn 
                <Typed className='pl-3'
                    strings={['Web Development','Cyber Security','Artificial Intelligence','Machine Learning']}
                    typeSpeed={100}
                    backSpeed={120}
                    loop={true}
                />
                </div>
                <button className='hover:drop-shadow-2xl md:w-[16%] bg-black text-white p-3 my-2 rounded'> Get Started </button>
            </div>
        </div>
    )
}
