import React, { useEffect } from 'react'



const Header = () => {
  return (
    <div className='h-[10vh]  flex justify-between item-center'>
    <div className='flex gap-2  items-center ml-3'>
    <img className='rounded-full bg-gray-500 w-16 h-16 '  
    src="https://res.cloudinary.com/ddi6pgru6/image/upload/v1702797628/CodeHelp/Roshan.jpg"
    >
      
    </img>
    <p className=''>Roshan</p>
    </div>
    <div className='flex items-center gap-12 mr-4'>
    <div className=''>Home</div>
    <div>features</div>
    <div>Projects</div>
    <div>Resume</div>

    
    </div>
    </div>
  )
}

export default Header