import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Asides from '../Components/Asides/Asides';
import ProducDisplay from '../Components/ProductDisplay/ProducDisplay';
import Descriptionbox from '../Components/DescriptionBox/Descriptionbox';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct';

const Product = () => {

  const { all_product } = useContext(ShopContext)
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId))
  return (
    <div>
      < Asides product={product} />
      <ProducDisplay product={product} />
      <Descriptionbox />
      <RelatedProduct />
    </div>

  )
  return (
    <div>Product</div>
  )
}

export default Product;