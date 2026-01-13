import React from 'react'
import { productList } from './productList'
import Product from './Product'
import type { OrderState, product } from './types'

interface ReactTypes {
  setstate: React.Dispatch<React.SetStateAction<OrderState | undefined>>
}

const Products: React.FC<ReactTypes> = ({ setstate }) => {
  return (
    <div id='products'>
      {
        productList.map((e: product) => (
          <Product key={e.id} data={e} setstate={setstate} />
        ))}
    </div>
  )
}

export default Products