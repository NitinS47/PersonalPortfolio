import React from 'react'
import { MagicButton } from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import Image from 'next/image' // Import Image component from next/image

function Footer() {
  return (
    <footer className='w-full pb-10 mb-[100px] md:mb-5 z-100' id='contact'>
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw] text-white'>
            Ready to elevate <span className='text-black-100'>your</span> tech projects to the next level.
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out and connect with me.</p>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nitinpeter147@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <MagicButton
                title="let's get in touch"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-centers'>
            <p className='md:text-base text-sm '>Copyright © 2024 Nitin</p>
            <div className='flex items-center md:gap-3 gap-6'>
              {socialMedia.map((profile) => (
                <a 
                  key={profile.id} 
                  href={profile.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                >
                  {/* Replacing <img> with <Image> for optimization */}
                  <Image
                    src={profile.img}
                    alt={profile.img}  // Provide a description for accessibility
                    width={20}  // Specify width for optimization
                    height={20} // Specify height for optimization
                    className="rounded-full" // Adding optional class for image style
                  />
                </a>
              ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer
