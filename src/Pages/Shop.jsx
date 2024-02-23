import React from 'react'
import Offer from '../Component/Offers/Offer'
// import Hero from '../Component/Hero/Hero'
import Popular from '../Component/Popular/Popular'
import NewColl from '../Component/NewColl/NewColl'
import Newletter from '../Component/Newletter/Newletter'
// import { ShopContext } from '../Context/ShopContext'

const Shop = () => {
  return (
    <div>
      {/* <Hero/> */}
    <Popular/>
    <Offer/>
    <NewColl/>
    <Newletter/>
    </div>
    
  )
}

export default Shop
