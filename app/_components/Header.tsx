import { Button } from '@/components/ui/button'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between mt-2'>
        <p className='text-blue-500 font-bold mt-2  px-20'>&lt; Gaddam Rohith /&gt;</p>
        <Button className='rounded-full mr-5 '>Say Hello</Button>
    </div>
  )
}

export default Header