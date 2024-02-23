import React from 'react'
import './Offers.css'
import exclusive_images from '../Assets/exclusive_image.png'
const Offer = () => {
  return (
    <div className='offers'>
      <div className='offers-left'>
        <h1>Exclusive</h1>
        <h1>Offers for You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className='offers-right'></div>
        <img src={exclusive_images} alt=''/>
    </div>
  )
}

export default Offer
