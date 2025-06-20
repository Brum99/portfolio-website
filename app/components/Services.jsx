import { serviceData, assets} from '../../assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id='services' className='w-full px-[12%] py-10 scroll-mt-20' >
        <h4 className='text-center mb-2 text-lg font-ovo' style={{ color: 'var(--text-color)' }}>
            What I offer</h4>
        <h2 className='text-center text-5xl font-ovo' style={{ color: 'var(--text-color)' }}>
            My Services</h2>
                 
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo' style={{ color: 'var(--text-color)' }}
        >I spend most of my time working across these areas.</p>
             
        <div className='grid grid-cols-auto gap-6 my-10'>
                 
            {serviceData.map(({icon, title, description, link}, index)=>(
                <div key={index}
                className='border border-gray-400 rounded-lg px-8 py-12 cursor-pointer 
                            service-card grid-item hover-shadow-black'>
                     
                    <Image src={icon} alt='' className = 'w-10' />
                    <h3 className='text-lg my-y' style={{ color: 'var(--text-color)' }}>{title}</h3>
                    <p className='text-sm leading-5' style={{ color: 'var(--text-color)' }}>
                        {description}
                    </p>
                    {/* <a href={link} className='flex items-center gap-2 text-sm mt-5' style={{ color: 'var(--text-color)' }}>
                        Read more <Image alt='' src={assets.right_arrow} className='w-4' />
                    </a> */}
                </div>
            ))}
        </div>
     </div>
  )
}

export default Services