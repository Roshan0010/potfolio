import React, { useEffect, useState } from 'react'
import Font from 'react-font';
import { Typewriter } from 'react-simple-typewriter'
import { FaLinkedin ,FaTwitter } from "react-icons/fa6";
import { GrReactjs } from "react-icons/gr";
import { RiJavascriptFill } from "react-icons/ri";
import { SiRedux,SiTailwindcss } from "react-icons/si";
const Banner = () => {

const [nameColor, setNameColor] = useState('');
const nameColorArr = ['text-green-800', 'text-blue-800', 'text-red-800'];

useEffect(() => {
  let i = 0;
  setNameColor(nameColorArr[i]); // Set initial color

  const interval = setInterval(() => {
    i = (i + 1) % nameColorArr.length;
    setNameColor(nameColorArr[i]); // Set the next color
  }, 2000);

  return () => clearInterval(interval);
}, []); 
  
  return (
    <section id='Banner' className='h-[90vh] bg-gray-200 flex'>
      
      <div className=' w-[60%] h-[100%] flex justify-center items-center '>
        <div className='  w-[80%] h-[70%] flex p-3 flex-col text-2xl justify-between '>

          <div className=''>
          <p>Namaste All 🙏</p>
            <div className='flex flex-row text-7xl '>
            <p className={`${nameColor}`}>Roshan</p>

            <p className='pl-4 bg-'>this side</p>
          </div>
          <div className='flex gap-1 text-4xl'>
          <p>A</p>
          <Typewriter
            words={['Programmer', 'Problem Solver','Debugger' ,'Coder']}
            loop={4}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={100}
            delaySpeed={1000} /> 
          </div>

        </div>

        <div className='text-lg font-mono"'>
        <Font family='Press Start 2P'  >
        <p className='text-gray-500 text-sm'>
             A passionate coder on a quest for innovative solutions
            With a knack for problem-solving and meticulous debugging skills,
             dives into challenges, driven by curiosity and a hunger to learn and
            brings fresh perspectives and a relentless drive to any coding project.
        </p>
            
          </Font>
          </div>
          <div className='  h-[20%] flex justify-between'>
            <div className='w-[30%] '>
            <p className='text-lg ml-2 '>FIND ME IN</p>
            <div className=' w-full h-[60%] flex items-center justify-between'>
            <div className='bg-slate-300 p-2 m-2 rounded-md'>
            <a href='http://www.google.com' target='_blank' rel='noopener noreferrer'>
          <FaLinkedin />
            </a>
            </div>
            
            <div className='bg-slate-300 p-2 m-2 rounded-md'>
            <a href='http://www.google.com' target='_blank' rel='noopener noreferrer'>
          <FaTwitter />
            </a>
            </div>
           

            
            </div>
            </div>
            <div className='w-[50%] '>
    
            <p className='text-lg ml-2 '>BEST SKILLS ON</p>
            <div className=' w-full h-[60%] flex items-center justify-between'>
            <div className='bg-slate-300 p-2 m-2 rounded-md'>
            <div >
          <GrReactjs color='#129ECB' />
            </div>
            </div>
            
            <div div className='bg-slate-300 p-2 m-2 rounded-md'>
            <div>
            <RiJavascriptFill />
            </div>
            </div>
            <div className='bg-slate-300 p-2 m-2 rounded-md'>
            <div >
            <SiRedux />
            </div>
            </div>
            <div className='bg-slate-300 p-2 m-2 rounded-md'>
            <div >
            <SiTailwindcss />
            </div>
            </div>
           
           
            
            
            </div>
            </div>
          </div>


      </div>
      

    </div>
    <div className='bg-gray-100 w-[40%] h-[100%]'>
        
      </div>
       
     \


    
    </section>
  )
}

export default Banner;