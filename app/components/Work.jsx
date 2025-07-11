import Image from 'next/image'
import Link from 'next/link'
import { assets, workData } from '../../assets/assets'
import React from 'react'
import DynamicArrow from './DynamicArrow';

const Work = (isDarkMode) => {
  return (
    <div id = 'work' className='w-full px-[12%] py-10 scroll-mt-20'>
       <h4 className='text-center mb-2 text-lg font-ovo'>
            My portfolio</h4>
        <h2 className='text-center text-5xl font-ovo'>
            My latest work</h2>
        
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'
        >A look through some of my most recent projects.</p>


    <div className='grid grid-cols-auto my-10 gap-5'>
        {workData.map((project) => (
                <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="relative group rounded-lg overflow-hidden"
                >
                <div className="aspect-video w-full relative">
                    <Image
                    src={project.bgImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                    />
                </div>
                <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 '>
                    <div>
                        <h2 className='font-semibold force-dark-heading-black'>{project.title}</h2>
                        <p className='text-sm text-gray-700'>{project.description}</p>
                    </div>
                    <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                        <Image src={assets.send_icon} alt='send icon' className='w-5'/>
                    </div>
                </div>
            </Link>
        ))}
        
        <Link
            href="/projects"
            className="px-10 py-3 border rounded-full flex items-center gap-2 transition-colors duration-300 mx-auto my-20 w-max show-more-btn"
            style={{
                borderColor: 'var(--text-color)',
                color: 'var(--text-color)'
            }}
        >
            Show more
            <DynamicArrow className="w-4 h-4" />
        </Link>
    </div>
    </div>
  )
}

export default Work
