import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Breadcrums from "../Component/Breadcrum/Breadcrums";
import { useParams } from "react-router-dom";
import ProductDisplay from "../Component/ProductDis/ProductDisplay";
import DescriptionBox from "../Component/DescriptionBox/DescriptionBox";
import RelatedProduct from "../Component/RelatedProducts/RelatedProduct";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.filter((e) => e.id === Number(productId))[0];
  console.log(product, all_product, productId);
  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox/>
      <RelatedProduct/>
    </div>
  );
};
export default Product;
