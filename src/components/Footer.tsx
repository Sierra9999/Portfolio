import React from 'react'
import Socials from './Socials'

const Footer = () => {
  return (
    <footer id='contact' className='footer'>
      <div>
      <h1 className='footer__title'>Contact Me,</h1>
        <h1 className='footer__title'>Let&apos;s talk.</h1>
        <a href="mailto:mateo.sierra17@icloud.com" className='footer__mail red-gradient'>mateo.sierra17@icloud.com</a>
        <a className='footer__phone-number blue-gradient'>+57 301 488 9182</a>
        <Socials/>
      </div>

    </footer>
  )
}

export default Footer