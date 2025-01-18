import React from 'react'

function Spinner() {
  return (
    <div className='flex items-center w-full justify-center'>
      <div className='w-10 h-10 border-2 border-red-500 border-solid rounded-full animate-spin border-t-transparent'>
        <div className="w-full h-full rounded-full border-2 border-red-200 border-t-transparent animate-ping">
            
        </div>
      </div>
    </div>
  )
}

export default Spinner
