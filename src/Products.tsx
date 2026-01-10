import React from 'react'
import { productList } from './productList'
import Product from './Product'
import type { product } from './types'

const Products : React.FC = () => {
  return (
    <div id='products'>
        {
        productList.map((e:product)=>(
            <Product key={e.id} data={e} />
        ))}
    </div>
  )
}

export default Products