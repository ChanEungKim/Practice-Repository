import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrease } from './pages/counterSlice';
import styled from 'styled-components';
import { change } from './pages/state';
import { useState } from 'react';

const Button = styled.button`
  width: 200px;
  height: 200px;
  font-size: 100px;
`

function App() {
  const [data , setData] = useState('');
  const count = useSelector((state)=>state.counter.value);
  const state = useSelector((state)=>state.states.value);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        {count}
      </div>
      <Button onClick={()=>{dispatch(increment())}}>+</Button>
      <Button onClick={()=>{dispatch(decrease())}}>-</Button>
      <div>
        {state}
      </div>
      <Button onClick={()=>{dispatch(change(data))}}></Button>
      <input
        value={data}
        onChange={e=> setData(e.target.value)}></input>
    </>
  );
}

export default App;
