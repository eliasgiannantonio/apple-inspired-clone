import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils'
import { navLists } from '../constants'

function Navbar() {
  return (
    <header className='w-full flex justify-between items-center py-5 px-5 sm:px-10'>
        <nav className='flex w-full screen-max-width'>
            <img src={appleImg} alt="Apple" srcset="" width={14} height={18} />
            <div className='flex flex-1 justify-center max-sm:hidden'>
                {navLists.map((nav) => (
                    <div key={nav} className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all'>
                        {nav}
                    </div>
                ))}
            </div>
            <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
                <img src={searchImg} alt="search" width={18} height={18} srcset="" />
                <img src={bagImg} alt="bag" width={18} height={18} srcset="" />
            </div>
        </nav>
    </header>
  )
}

export default Navbar