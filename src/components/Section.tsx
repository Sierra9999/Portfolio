import React from 'react'

function Section({children} : React.PropsWithChildren) {
  return (
    <section  className='page-section'>{children}</section>
  )
}

export default Section