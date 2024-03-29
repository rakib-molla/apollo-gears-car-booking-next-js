import React from 'react'

function carsLayout({children}:{children: React.ReactNode}) {
  return (
    <div>
        <h1 className='text-orange-700'>Cars sidebar</h1>
        {children}
    </div>
  )
}

export default carsLayout