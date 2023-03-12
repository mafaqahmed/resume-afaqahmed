import React from 'react'
import {BsInstagram, BsTwitter, BsLinkedin, BsGithub} from 'react-icons/bs'

const Sidebar = () => {
  return (
    <div className='px-6 text-xl flex flex-col space-y-9 justify-center text-gray-400'>
      <a href="https://github.com/mafaqahmed">
      <BsGithub className='hover:text-white ease-in-out duration-200'/>
      </a>
      <a href="https://www.linkedin.com/in/afaqahmed-/">
      <BsLinkedin className='hover:text-white ease-in-out duration-200'/>
      </a>
      <a href="https://twitter.com/AfaqAhm61922865">
      <BsTwitter className='hover:text-white ease-in-out duration-200'/>
      </a>
      <BsInstagram className='hover:text-white ease-in-out duration-200'/>
      <div className='h-screen w-2 border-r-2 border-gray-400'></div>
    </div>
  )
}

export default Sidebar
