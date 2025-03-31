import React from 'react'
import { headerNavLink } from '../constant'


function Header() {
  return (
    <div className='bg-sky-100 flex justify-between px-10'>
        <div>
            <h1 className='text-xl'>TechEnchant</h1>
        </div>
        <div className='flex gap-4'>
            
            {headerNavLink.map((item) => (
                <h1>{item.title}</h1>
            ))}
        </div>
        <div>
            <button>Enquiry</button>
        </div>
    </div>
  )
}

export default Header