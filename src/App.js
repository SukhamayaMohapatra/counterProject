
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { increment , decrement,reset ,incrementByAmount} from './features/counters/counterSlice';
import { useState } from 'react';

function App() {

const [amount,setAmount] = useState(0)

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick  () {
      dispatch(increment());
  }
  function handleDecrementClick () {
    dispatch(decrement());
  }
  function handleResetClick (){
    dispatch(reset());
  }
  function handleAmountClick (){
    dispatch(incrementByAmount(amount));
  }
  return (
    <div className="App">
      
     <button onClick={handleIncrementClick}>+</button><br/>
     <span>Count :{count}</span><br/>
     <button onClick={handleDecrementClick}>-</button><br/>
     <button onClick={handleResetClick}>Reset</button><br/>
    <input
    type="number"
    value ={amount}
    onChange={(e)=>setAmount(e.target.value)}
    />
    <button onClick={handleAmountClick}>Inc by amount</button><br/>
    </div>
  );
}

export default App;
