import React from 'react'
import './RelatedProduct.css'
import Item from '../Items/Item'
import data_product from '../Assets/data'
const RelatedProduct = () => {
  return (
    <div className='relatedproducts'>
    <h1>Related Preoduct</h1>
    <hr/>
      <div className="relatedproducts-item">
        {
          data_product.map((item,i)=>{
            return <Item
            key={i} // Assuming 'id' is a unique identifier for each product
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        })}
        
      </div>
    </div>
  )
}

export default RelatedProduct
