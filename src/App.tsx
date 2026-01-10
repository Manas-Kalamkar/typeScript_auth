import React from 'react'
import OrderStateDisplay from './OrderStateDisplay';
import SelectAction  from './SelectAction';
import Products from './Products'; 
import './App.css'
const App : React.FC = () => {
  return (
    <div className='App'>
      <Products />
      <OrderStateDisplay />
      <SelectAction />
    </div>
  )
}

export default App;