'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import ContactModal from './ContactModal'

function Header() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <div className='flex justify-between mt-2'>
        <p className='text-blue-500 font-bold mt-2  px-20'>&lt; Gaddam Rohith /&gt;</p>
        <Button 
          className='rounded-full mr-5'
          onClick={() => setIsContactModalOpen(true)}
        >
          Say Hello
        </Button>
        <ContactModal 
          isOpen={isContactModalOpen} 
          onClose={() => setIsContactModalOpen(false)} 
        />
    </div>
  )
}

export default Header
