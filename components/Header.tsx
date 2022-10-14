import React from 'react'
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
        <div className='flex flex-row items-center'>
            {/* Icons */}
        <SocialIcon url="https://facebook.com" 
        fgColor='gray'
        bgColor='transparent
        '/>
        <SocialIcon url="https://youtube.com" 
        fgColor='gray'
        bgColor='transparent
        '/>
        <SocialIcon url="https://linkedin.com" 
        fgColor='gray'
        bgColor='transparent
        '/>
        <SocialIcon url="https://github.com" 
        fgColor='gray'
        bgColor='transparent
        '/>
        </div>
        
        <div className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <SocialIcon url="https://gmail.com"
        className='cursor-pointer'
        network='email'
        fgColor='gray'
        bgColor='transparent'
        />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>My Email</p>
        </div>

    </header>
  )
}