import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import dropdown_icon from "../Component/Assets/dropdown_icon.png";
import Item from "../Component/Items/Item";
import { ShopContext } from "../Context/ShopContext";


const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext); // Changed variable name to all_product
  return (
    <div className="shopcategory">
      <img src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={item.id} // Assuming 'id' is a unique identifier for each product
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
