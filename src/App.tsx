import React from 'react'
import OrderStateDisplay from './OrderStateDisplay';
import SelectAction from './SelectAction';
import Products from './Products';
import './App.css'
import type { OrderState } from './types';
const App: React.FC = () => {

  const [state, setstate] = React.useState<OrderState | undefined>(undefined)
  console.log(state);
  return (
    <div id='App'>

      <Products setstate={setstate} />
      <OrderStateDisplay state={state} />
      <SelectAction state={state} setstate={setstate} />
    </div>
  )
}

export default App;