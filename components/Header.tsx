import React from 'react'
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

type Props = {}

export default function Header({}: Props) {
  return (
    <header>
        <div>
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
    </header>
  )
}