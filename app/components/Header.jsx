import Image from 'next/image'
import React from 'react'
import { assets } from '../../assets/assets';
import DynamicArrow from './DynamicArrow';
import { motion } from "motion/react"

// Add { isDarkMode } as a parameter to receive the prop
const Header = ({ isDarkMode }) => {
  return (
    <div id='header' className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      
      <div>
        <Image src={assets.profile_img} alt='' className="rounded-full w-32" />
      </div>
      
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo">
        Hi! I'm Sam Peterson 
        <Image src={assets.hand_icon} alt='' className="w-6" />
      </h3>
      
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo">
        Data Scientist based in Melbourne.
      </h1>
      
      <p className="max-w-2xl mx-auto font-ovo">
        I am a Data Scientist from Melbourne Australia, with experience in machine learning, AI integration, and full-stack development.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
            className="px-10 py-3 border rounded-full flex items-center gap-2 transition-all duration-300"
            style={{
              backgroundColor: 'var(--text-color)',
              color: 'var(--bg-color)',
              borderColor: 'var(--text-color)',
            }}
            onMouseEnter={(e) => {
              // In light mode -> use dark mode's hover color (#2a004a)
              // In dark mode -> use light mode's hover color (#fcf4ff)
              e.currentTarget.style.backgroundColor = isDarkMode ? '#fcf4ff' : '#2a004a';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--text-color)';
            }}
          >
            contact me
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12h14m-7-7l7 7-7 7"
                stroke="var(--bg-color)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
                        
        <a
          href="/Samuel David Peterson - Resume.pdf"
            download
            className="px-10 py-3 border rounded-full flex items-center gap-2 
                      transition-all duration-300"
            style={{
              borderColor: 'var(--text-color)',
              color: 'var(--text-color)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--hover-color)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            my resume
            <DynamicArrow className="w-4 h-4" />
          </a>
      </div>
    </div>
  )
}

export default Header