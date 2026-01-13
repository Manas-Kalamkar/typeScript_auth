import React from 'react'
import type { OrderState } from './types'

const OrderStateDisplay: React.FC<{ state: OrderState }> = ({ state }) => {
  return (
    <div id='display'>
      {state !== null &&
      state?.status !== undefined ? 
      state.status : <p></p>}
    </div>
  )
}

export default OrderStateDisplay