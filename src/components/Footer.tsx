import React from 'react'
import Socials from './Socials'

const Footer = () => {
  return (
    <footer id='contact' className='footer'>
      <div>
      <h1 className='footer__title'>Contact Me,</h1>
        <h1 className='footer__title'>Let&apos;s talk.</h1>
        <a href="mailto:m.sierra1037@hotmail.com" className='footer__mail'>m.sierra1037@hotmail.com</a>
        <a href="mailto:m.sierra1037@hotmail.com" className='footer__phone-number'>+57 301 488 9182</a>
        
        <Socials/>
      </div>

    </footer>
  )
}

export default Footer