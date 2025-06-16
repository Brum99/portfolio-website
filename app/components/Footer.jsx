import { assets } from '../../assets/assets'
import Image from 'next/image'
import React from 'react'


const Footer = () => {
  return (
    <div className='mt-20'>
      <div className="text-center">
        <div className="flex-shrink-0 mb-2">
          <a 
            href="#header" 
            className="text-xl font-bold block text-center"
            style={{ color: 'var(--text-color)' }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Samuel.
          </a>
        </div>

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="" className="w-6" />
          samdpeterson1999@gmail.com
        </div>
      </div>


      <div className='text-center sm:flex items-center justify-between border-t
      border-gray-400 mx-[10%] mt-12 py-6'>
        <p>@ 2025 Samuel Peterson. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/sam-peterson-179b73217"
                className="text-blue-500 hover:underline"
            >
                LinkedIn
            </a>
            </li>

        </ul>
      </div>
    </div>
  )
}

export default Footer
