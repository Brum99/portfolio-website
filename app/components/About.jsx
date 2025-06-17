'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { assets, infoList, toolsData } from '../../assets/assets';

const About = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if theme-dark class is present on the html tag
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('theme-dark');
      setIsDarkMode(isDark);
    };

    // Initial check
    checkDarkMode();

    // Observe class changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-ovo'>About me</h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        {/* Profile Image */}
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
        </div>

        {/* Text + Grid */}
        <div className='flex-1'>
          <p className='mb-10 max-w-2xl font-ovo' style={{ color: 'var(--text-color)' }}>
            I am an experienced Data Scientist and Web App Developer with a strong foundation in AI and machine
            learning. Throughout my journey, I have had the privilege of contributing to cutting-edge research
            in surgical robotics, where I helped develop a 3D convolutional neural network to assess surgeon skill
            levels using video data from robotic surgical systems. My experience spans both academic research and
            industry, allowing me to craft elegant, responsive interfaces while also understanding the power of
            data-driven systems through advanced AI model training for large language models.
          </p>

          <ul className='grid grid-col-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className='border-[0.5px] border-gray-400 rounded-xl p-6 
   cursor-pointer grid-item hover-shadow-black'
              >
                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                <h3 className='my-4 font-semibold' style={{ color: 'var(--text-color)' }}>
                  {title}
                </h3>
                <p className='text-sm' style={{ color: 'var(--text-color)' }}>
                  {description}
                </p>
              </li>
            ))}
          </ul>

          <h4 className='my-6 font-semibold' style={{ color: 'var(--text-color)' }}>Tools I use</h4>

          <ul className='flex items-center gap-3 sm:gap-5'>
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className='flex items-center justify-center
                w-12 sm:w-14 aspect-square border border-gray-400 
                rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
              >
                <Image src={tool} alt='Tool' className='w-5 sm:w-7 invert-on-dark' />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
