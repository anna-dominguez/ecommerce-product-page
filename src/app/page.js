'use client'

import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'

export default function Home() {
  const [isCartOpen, setCartOpen] = useState(false)
  const [sneakersInCart, setSneakersInCart] = useState(0)

  const openCart = () => {
    setCartOpen(!isCartOpen)
  }

  return (
    <>
      <Header openCart={openCart} sneakersInCart={sneakersInCart} />
      <Main
        isCartOpen={isCartOpen}
        sneakersInCart={sneakersInCart}
        setSneakersInCart={setSneakersInCart}
      />
    </>
  )
}
