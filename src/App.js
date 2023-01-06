import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrease } from './pages/counterSlice';
import styled from 'styled-components';

const Button = styled.button`
  width: 200px;
  height: 200px;
  font-size: 100px;
`

function App() {
  const count = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        {count}
      </div>
      <Button onClick={()=>{dispatch(increment())}}>+</Button>
      <Button onClick={()=>{dispatch(decrease())}}>-</Button>
    </>
  );
}

export default App;
