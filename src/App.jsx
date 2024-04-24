import React, { Component, useState } from 'react'
import Count from './components/exercice 11/Count'
import Button from './components/exercice 11/Button'


function App() {
  const [countOne, setCountOne] = useState({value: 0, btnColor : 'success', increment : 25, decrement : -25});
  const [countTwo, setCountTwo] = useState({value: 0, btnColor : 'danger', increment : 20, decrement : -20});
  
  const  incrementCountOne = () => {
    if (countOne.value < 100) {
      setCountOne({...countOne, value : countOne.value + countOne.increment});
    }
  }
  const  incrementCountTwo = () => {
    if (countTwo.value < 100) {
      setCountTwo({...countTwo, value : countTwo.value + countTwo.increment});
    }
  }
  const  decrementCountOne = () => {
    if (countOne.value > 0) {
      setCountOne({...countOne, value : countOne.value + countOne.decrement});
    }
  }
  const  decrementCountTwo = () => {
    if (countTwo.value > 0) {
      setCountTwo({...countTwo, value : countTwo.value + countTwo.decrement});
    }
  }
  
  return (
    <div className='text-center'>
      <Count count={countOne.value} bgColor={countOne.btnColor}></Count>
      <Count count={countTwo.value} bgColor={countTwo.btnColor}></Count>
      <Button handleClick={incrementCountOne} btnColor={countOne.btnColor}>{`+${countOne.increment}`}</Button>
      <Button handleClick={decrementCountOne} btnColor={countOne.btnColor}>{`${countOne.decrement}`}</Button>
      <br />
      <Button handleClick={incrementCountTwo} btnColor={countTwo.btnColor}>{`+${countTwo.increment}`}</Button>
      <Button handleClick={decrementCountTwo} btnColor={countTwo.btnColor}>{`${countTwo.decrement}`}</Button>
    </div>
  )
}

export default App

// export class App extends Component {
//   render() {
//     return (
 
//     )
//   }
// }

// export default App