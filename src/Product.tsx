import type { productProps } from "./types"

const Product  = ({data} : productProps) => {
  return (
    <div className="product" id={`${data.id}`}>
        <h1>{data.heading}</h1>
        <h4>{data.subHeading}</h4>
        <h4>₹{data.price}</h4>
        <button>Buy</button>
    </div>
  )
}

export default Product