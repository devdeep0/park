import React from 'react'

function Header() {
  return (
    <div className='bg-inherit w-full absolute flex justify-between items-center p-7 text-white h-[70px]'>
        <div>
            logo
        </div>
        <div className='w-[500px] h-full flex justify-center items-center '>
            <ul className='flex w-full justify-between'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Support</li>
            </ul>
        </div>
    </div>
  )
}

export default Header