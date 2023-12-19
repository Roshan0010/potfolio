import React, { useEffect } from 'react'
import { Link } from 'react-scroll';
const Header = () => {

  const headerArray = [
    { 
      id: "101",
      title: "Banner",
      link: "Banner"
    },
    {
      id: "102",
      title: "Features",
      link: "Features"
    },
    {
      id: "103",
      title: "Projects",
      link: "Projects"
    },
    {
      id: "104",
      title: "Resume",
      link: "Resume"
    },
    {
      id: "105",
      title: "Contact",
      link: "Contact"
    }
  ];
  
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
    {
      
      headerArray.map(({id,title,link})=>(
        <div key={id} className='cursor-pointer '>
       <Link 
      activeClass='active'
      to={link}
      syp={true}
      smooth={true}
      duration={800}
      offset={-70}
       >{title}</Link> 
         <div className='bg-red-400 h-2 w-0 hover:w-full transition-width'></div>

      </div>
      ))
    }
    

    
    </div>
    </div>
  )
}

export default Header