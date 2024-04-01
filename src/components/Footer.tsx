import React from 'react'
import Socials from './Socials'

const Footer = () => {
  return (
    <footer id='contact' className='footer'>
        <h1 className='footer__title'>LET&apos;S CONNECT</h1>
        <p className='footer__message'>Do you have a project in mind? </p>
        <a href="mailto:m.sierra1037@hotmail.com" className='footer__cta get-in-touch'>let&apos;s get in touch!</a>
        <Socials/>
    </footer>
  )
}

export default Footer