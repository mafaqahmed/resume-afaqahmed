import React from 'react'
import {BsInstagram, BsTwitter, BsLinkedin, BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='text-xl flex space-x-9 justify-center items-center text-gray-400 mb-8 mt-20'>
      <BsGithub />
      <BsInstagram />
      <BsTwitter />
      <BsLinkedin />
    </div>
  )
}

export default Footer
