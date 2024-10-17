'use client'
import React, { useState, useCallback } from 'react'
import { Button } from '@/components/ui/button'

function Header() {
  const [showPopup, setShowPopup] = useState(false)

  const handleSayHello = useCallback(() => {
    setShowPopup(true)
    setTimeout(() => setShowPopup(false), 500)
  }, [])

  return (
    <div className='flex justify-between mt-2'>
      <p className='text-blue-500 font-bold mt-2 px-20'>&lt; Gaddam Rohith /&gt;</p>
      <Button 
        className='rounded-full mr-5'
        onClick={handleSayHello}
      >
        Say Hello
      </Button>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white p-12 rounded-2xl shadow-2xl transform scale-150">
            <span className="text-5xl animate-wave">👋</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
