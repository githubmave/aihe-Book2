import React from 'react'

function Footer (props) {
  const copyright = 'JKLM'
  const author = 'Jayden, Kienan, Lukin and Mave'

  return (
    <div className='footer'>
      <div>&copy; {copyright}</div>
      <div>{author}</div>
    </div>
  )
}

export default Footer
