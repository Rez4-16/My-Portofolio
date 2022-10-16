import React from 'react'
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import {motion} from "framer-motion"
type Props = {}

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
        <motion.div
                  initial = {{
                    y: -200,
                    opacity:0,
                    scale:0.5
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    scale: 1
                  }}
                  transition= {{
                    duration: 0.8
                  }}
                   className='flex flex-row items-center'>
            {/* Icons */}
        <SocialIcon url="https://facebook.com" 
        fgColor='white'
        bgColor='transparent
        '/>
        <SocialIcon url="https://youtube.com" 
        fgColor='white'
        bgColor='transparent
        '/>
        <SocialIcon url="https://linkedin.com" 
        fgColor='white'
        bgColor='transparent
        '/>
        <SocialIcon url="https://github.com/Rez4-16" 
        fgColor='white'
        bgColor='transparent
        '/>
        </motion.div>
        
        <motion.div 
          initial = {{
            y: -200,
            opacity:0,
            scale:0.5
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1
          }}
          transition= {{
            duration: 0.8
          }}
          className='flex flex-row items-center text-white-300 cursor-pointer'>
        <SocialIcon url="https://gmail.com"
        className='cursor-pointer'
        network='email'
        fgColor='white'
        bgColor='transparent'
        />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>My Email</p>
        </motion.div>

    </header>
  )
}