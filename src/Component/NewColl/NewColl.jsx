import React from 'react'
import './NewColl.css'
import Item from '../Items/Item'
import new_collection from '../Assets/new_collections'

const NewColl = () => {
  return (
    <div className='newcoll'>
      <h1>NEW COLLECTION</h1>
      <hr/>
      <div className='coll'>
        {new_collection.map((item,i)=>{
            return <Item
            key={item.id} // Assuming 'id' is a unique identifier for each product
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

export default NewColl
