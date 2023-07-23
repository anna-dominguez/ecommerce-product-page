import Image from 'next/image'

import Logo from '../../../public/images/logo.svg'
import Cart from '../../../public/images/icon-cart.svg'
import Menu from '../../../public/images/icon-menu.svg'
import Avatar from '../../../public/images/image-avatar.png'
import Close from '../../../public/images/icon-close.svg'
import { useState } from 'react'

const menuItems = ['Collection', 'Men', 'Women', 'About', 'Contact']

const Header = ({ openCart, sneakersInCart }) => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <header
      className={`p-6 md:w-[75%] md:m-auto md:p-0 md:border-b md:border-grey/50 flex items-center justify-between ${
        openMenu && 'h-full'
      }`}
    >
      {openMenu ? (
        <div className="top-0 w-2/3 left-0 p-6 absolute z-50 shadow-[200px_0_22px_36px_rgba(0,0,0,0.5)] h-full bg-white">
          <button onClick={() => setOpenMenu(false)}>
            <Image src={Close} />
          </button>
          <div className="mt-10 space-y-6">
            {menuItems.map((item) => (
              <p>{item}</p>
            ))}
          </div>
        </div>
      ) : (
        ''
      )}
      <div className="flex space-x-6 md:space-x-0 items-center">
        <button className="md:hidden" onClick={() => setOpenMenu(true)}>
          <Image className="w-5 cursor-pointer" src={Menu} />
        </button>
        <Image className="w-[137px]" src={Logo} />
        <div className="hidden md:flex md:space-x-8">
          {menuItems.map((item) => (
            <button className="py-8 ml-14 hover:border-b-4 border-b-orange">
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="flex space-x-6 items-center">
        <div
          onClick={() => openCart()}
          className="relative cursor-pointer p-1.5"
        >
          <Image className="w-6" src={Cart} />
          {sneakersInCart ? (
            <p className="absolute bg-orange px-1.5 text-white text-[10px] top-0 right-0 rounded-md">
              {sneakersInCart}
            </p>
          ) : (
            ''
          )}
        </div>
        <Image
          className="cursor-pointer w-6 md:w-[50px] hover:border-2 rounded-full hover:border-orange"
          src={Avatar}
        />
      </div>
    </header>
  )
}

export default Header
