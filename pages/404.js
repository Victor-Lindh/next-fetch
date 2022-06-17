import React from 'react'
import Link from 'next/link'

const NullPage = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '66vh'}}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p>No page here</p>
        <Link href='/'>
          <a>Go back to the shadows</a>
        </Link>
      </div>
    </div>
  )
}

export default NullPage
