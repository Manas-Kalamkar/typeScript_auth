import type { product, OrderState } from "./types"
import React from "react"


interface ReactTypes {
  data: product,
  setstate: React.Dispatch<React.SetStateAction<OrderState | undefined>>
}

const Product: React.FC<ReactTypes> = ({ data, setstate }) => {
  return (
    <div className="product" id={`${data.id}`}>
      <h1>{data.heading}</h1>
      <h4>{data.subHeading}</h4>
      <h4>₹{data.price}</h4>
      <button onClick={() => { setstate({ status: "created", orderId: data.id }) }}>Buy</button>
    </div>
  )
}

export default Product