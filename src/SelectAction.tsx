import React from 'react'
import type { OrderState, OrderAction } from './types';
import type { number } from 'framer-motion';
import { productList } from './productList';

interface ReactTypes {
  state: OrderState,
  setstate: React.Dispatch<React.SetStateAction<OrderState | undefined>>
}


const SelectAction: React.FC<ReactTypes> = ({ state, setstate }) => {

  function assertNever(state: never): never {
    throw new Error("This state is not handled")
  }

  function nextState(
    state: OrderState,
    action: OrderAction):
    OrderState {
    switch (state.status) {
      case "created":
        if (action === "pay") {
          return { status: "paid", paid: (productList.find((product)=>  state.orderId ===product.id))?.price ?? 100 };
        }
        if (action === "cancel") {
          return { status: "cancelled", reason: "unfit product" }
        }
        throw new Error(`Action ${action} is not allowed in created state`)

      case "paid":
        if (action === "ship") {
          return { status: "shipped", shippedAt: new Date(1767895200000) };
        }
        if (action === "cancel") {
          return { status: "cancelled", reason: "unfit product" }
        }
        throw new Error(`Action ${action} is not allowed in paid state`)

      case "shipped":
        if (action === "deliver") {
          return { status: "delivered", deliveredAt: new Date(1767895200000) }
        }
        throw new Error(`Action ${action} is not allowed in shipped state`)
      case "delivered":
        throw new Error(`Action ${action} is not allowed in delivered state`)

      case "cancelled":
        throw new Error(`Action ${action} is not allowed in cancelled state`)

      default:
        return assertNever(state);
    }
  }
  return (
    <div id='buttons'>
      <button onClick={()=>setstate(nextState(state,"pay"))} >Pay</button>
      <button onClick={()=>setstate(nextState(state,"ship"))} >Ship</button>
      <button onClick={()=>setstate(nextState(state,"deliver"))} >Deliver</button>
      <button onClick={()=>setstate(nextState(state,"cancel"))} >Cancel</button>
    </div>
  )
}

export default SelectAction