import Image from 'next/image'
import { useState } from 'react'

import Product1 from '../../../public/images/image-product-1.jpg'
import Product2 from '../../../public/images/image-product-2.jpg'
import Product3 from '../../../public/images/image-product-3.jpg'
import Product4 from '../../../public/images/image-product-4.jpg'
import Next from '../../../public/images/icon-next.svg'
import Previous from '../../../public/images/icon-previous.svg'
import Plus from '../../../public/images/icon-plus.svg'
import Minus from '../../../public/images/icon-minus.svg'
import Delete from '../../../public/images/icon-delete.svg'
import ThumbProduct1 from '../../../public/images/image-product-1-thumbnail.jpg'
import ThumbProduct2 from '../../../public/images/image-product-2-thumbnail.jpg'
import ThumbProduct3 from '../../../public/images/image-product-3-thumbnail.jpg'
import ThumbProduct4 from '../../../public/images/image-product-4-thumbnail.jpg'

const Modal = ({ displayedImage, setDisplayedImage, setFullImage }) => {
  return (
    <div className="hidden fixed inset-0 bg-darkBlue bg-opacity-70 backdrop-blur-sm md:flex place-content-center place-items-center">
      <div className="relative md:flex md:flex-col md:w-[445px]">
        <svg
          onClick={() => setFullImage(false)}
          className="cursor-pointer absolute w-[20px] h-[20px] -top-9 right-0 fill-white hover:fill-orange"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fillRule="evenodd"
          />
        </svg>
        {displayedImage === 0 && (
          <Image
            alt="Picture Basket"
            className="w-full rounded-[15px]"
            src={Product1}
          />
        )}
        {displayedImage === 1 && (
          <Image
            alt="Picture Basket"
            className="w-full rounded-[15px]"
            src={Product2}
          />
        )}
        {displayedImage === 2 && (
          <Image
            alt="Picture Basket"
            className="w-full rounded-[15px]"
            src={Product3}
          />
        )}
        {displayedImage === 3 && (
          <Image
            alt="Picture Basket"
            className="w-full rounded-[15px]"
            src={Product4}
          />
        )}
        <button
          onClick={() => handleCaroussel(1)}
          className="cursor-pointer absolute p-5 bg-white rounded-full top-[40%] -right-8"
        >
          <Image className="h-3" src={Next} />
        </button>
        <button
          onClick={() => handleCaroussel(-1)}
          className="cursor-pointer absolute p-5 bg-white rounded-full top-[40%] -left-8"
        >
          <Image className="h-3" src={Previous} />
        </button>
        <div className="hidden md:flex md:w-[445px] mt-8 space-x-8">
          <Image
            onClick={() => setDisplayedImage(0)}
            className={`cursor-pointer rounded-[15px] ${
              displayedImage === 0 && 'border-2 border-orange opacity-40'
            } hover:opacity-40`}
            src={ThumbProduct1}
          />
          <Image
            onClick={() => setDisplayedImage(1)}
            className={`cursor-pointer rounded-[15px] ${
              displayedImage === 1 && 'border-2 border-orange opacity-40'
            } hover:opacity-40`}
            src={ThumbProduct2}
          />
          <Image
            onClick={() => setDisplayedImage(2)}
            className={`cursor-pointer rounded-[15px] ${
              displayedImage === 2 && 'border-2 border-orange opacity-40'
            } hover:opacity-40`}
            src={ThumbProduct3}
          />
          <Image
            onClick={() => setDisplayedImage(3)}
            className={`cursor-pointer rounded-[15px] ${
              displayedImage === 3 && 'border-2 border-orange opacity-40'
            } hover:opacity-40`}
            src={ThumbProduct4}
          />
        </div>
      </div>
    </div>
  )
}

const Main = ({ isCartOpen, sneakersInCart, setSneakersInCart }) => {
  const [displayedImage, setDisplayedImage] = useState(0)
  const [nbSneakers, setNbSneackers] = useState(0)
  const [fullImage, setFullImage] = useState(false)

  const handleCaroussel = (nb) => {
    if (nb === 1 && displayedImage === 3) setDisplayedImage(0)
    else if (nb === -1 && displayedImage === 0) setDisplayedImage(3)
    else setDisplayedImage(displayedImage + nb)
  }

  const handleNbSneakers = (nb) => {
    if (nb === -1 && nbSneakers === 0) setNbSneackers(0)
    else setNbSneackers(nbSneakers + nb)
  }

  return (
    <main
      className={`flex relative flex-col md:flex-row md:justify-between md:items-center pb-12 md:py-20 md:px-52 md:m-auto z-0`}
    >
      {fullImage && (
        <Modal
          displayedImage={displayedImage}
          setDisplayedImage={setDisplayedImage}
          setFullImage={setFullImage}
        />
      )}
      {isCartOpen && (
        <div className="self-center md:self-end shadow-md absolute m-3 md:m-0 md:-top-2 md:-right-20 w-[95%] md:w-[360px] bg-white rounded-[10px] z-50">
          <p className="p-6 border-b border-grey/50">Cart</p>
          {sneakersInCart ? (
            <div className="flex flex-col pb-4 z-50">
              <div className="p-6 flex space-x-2 justify-between items-center">
                <Image className="w-[50px] rounded-[4px]" src={ThumbProduct1} />
                <div>
                  <p className="text-blueGrey">Fall Limited Edition Sneakers</p>
                  <p>
                    <span className="text-blueGrey">
                      $125.00 x {sneakersInCart}
                    </span>{' '}
                    ${125 * sneakersInCart}
                  </p>
                </div>
                <button onClick={() => setSneakersInCart(0)}>
                  <Image className="h-4" src={Delete} />
                </button>
              </div>
              <button className="self-center mb-4 p-4 w-[90%] bg-orange text-white rounded-[10px]">
                Checkout
              </button>
            </div>
          ) : (
            <div className="my-20 flex justify-center">
              <p>Your cart is empty.</p>
            </div>
          )}
        </div>
      )}
      <div className="relative md:flex md:flex-col md:max-w-[445px] z-0">
        {displayedImage === 0 && (
          <Image
            onClick={() => setFullImage(true)}
            alt="Picture Basket"
            className="h-[300px] md:h-[445px] md:rounded-[15px] cursor-pointer"
            src={Product1}
          />
        )}
        {displayedImage === 1 && (
          <Image
            onClick={() => setFullImage(true)}
            alt="Picture Basket"
            className="h-[300px] md:h-fit md:rounded-[15px] cursor-pointer"
            src={Product2}
          />
        )}
        {displayedImage === 2 && (
          <Image
            onClick={() => setFullImage(true)}
            alt="Picture Basket"
            className="h-[300px] md:h-fit md:rounded-[15px] cursor-pointer"
            src={Product3}
          />
        )}
        {displayedImage === 3 && (
          <Image
            onClick={() => setFullImage(true)}
            alt="Picture Basket"
            className="h-[300px] md:h-fit md:rounded-[15px] cursor-pointer"
            src={Product4}
          />
        )}
        <button
          onClick={() => handleCaroussel(1)}
          className="md:hidden cursor-pointer absolute p-5 bg-white rounded-full top-[45%] right-6"
        >
          <Image className="h-3" src={Next} />
        </button>
        <button
          onClick={() => handleCaroussel(-1)}
          className="md:hidden cursor-pointer absolute p-5 bg-white rounded-full top-[45%] left-5"
        >
          <Image className="h-3" src={Previous} />
        </button>
        <div className="hidden md:flex mt-8 space-x-8">
          <Image
            onClick={() => setDisplayedImage(0)}
            className={`w-[88px] cursor-pointer rounded-[15px] ${
              displayedImage === 0 && 'border-2 border-orange opacity-40'
            } hover:opacity-40`}
            src={ThumbProduct1}
          />
          <Image
            onClick={() => setDisplayedImage(1)}
            className={`w-[88px] cursor-pointer rounded-[15px] ${
              displayedImage === 1 && 'border-2 border-orange opacity-40'
            } hover:opacity-40`}
            src={ThumbProduct2}
          />
          <Image
            onClick={() => setDisplayedImage(2)}
            className={`w-[88px] cursor-pointer rounded-[15px] ${
              displayedImage === 2 && 'border-2 border-orange opacity-40'
            } hover:opacity-40`}
            src={ThumbProduct3}
          />
          <Image
            onClick={() => setDisplayedImage(3)}
            className={`w-[88px] cursor-pointer rounded-[15px] ${
              displayedImage === 3 && 'border-2 border-orange opacity-40'
            } hover:opacity-40`}
            src={ThumbProduct4}
          />
        </div>
      </div>
      <div className="m-6 space-y-4 md:space-y-6 md:w-[445px] text-darkBlue z-0">
        <h1 className="text-bodyXS md:text-bodyM text-orange uppercase tracking-[1.85px]">
          Sneaker Company
        </h1>
        <h2 className="text-headingS md:text-[44px] leading-9">
          Fall Limited Edition Sneakers
        </h2>
        <p className="bodyS md:text-bodyM md:py-2 text-blueGrey">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="flex md:flex-col md:space-y-4 justify-between items-center md:items-start leading-[26px]">
          <div className="flex space-x-6 items-center">
            <h3 className="text-headingS text-darkBlue">$125.00</h3>
            <p className="text-orange bg-[#FFEEE2] px-2.5 py-1 rounded-md">
              50%
            </p>
          </div>
          <p className="text-grey line-through">$250.00</p>
        </div>
        <div className="md:grid md:grid-cols-3 md:space-x-4 md:content-stretch">
          <div className="bg-[#F6F8FD] flex justify-between p-4 mb-4 items-center rounded-[10px]">
            <button
              onClick={() => handleNbSneakers(-1)}
              className="cursor-pointer"
            >
              <Image className="w-3 h-[3.33px]" src={Minus} />
            </button>
            {nbSneakers}
            <button
              onClick={() => handleNbSneakers(1)}
              className="cursor-pointer"
            >
              <Image className="w-3 h-3" src={Plus} />
            </button>
          </div>
          <button
            onClick={() => setSneakersInCart(nbSneakers)}
            className="md:col-span-2 flex shadow-2xl shadow-orange bg-orange hover:bg-orange/70 w-full text-white p-4 rounded-[10px] items-center space-x-4 justify-center"
          >
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#FFF"
                fillRule="nonzero"
              />
            </svg>
            <p>Add to cart</p>
          </button>
        </div>
      </div>
    </main>
  )
}

export default Main
