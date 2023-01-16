import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrease } from "./pages/counterSlice";
import styled from "styled-components";
import { change } from "./pages/state";
import { useState } from "react";
import { Postcode } from "./pages/daumAddress";
import { ReactComponent as CancelIcon } from "./assets/icons/cancleIcon.svg";

const Button = styled.button`
  width: 100px;
  height: 50px;
  font-size: 20px;
  @media ${(props) => props.theme.tablet} {
    margin: 0 auto;
    background-color: ${(props) => props.theme.mainColor};
  }
`;
const Overflow = styled.div`
  width: 300px;
  height: 100px;
  border: 1px solid black;
  overflow-y: scroll;
  overflow-x: auto;
`;

const SVGcontainer = styled.button`
  width: 50px;
  height: 50px;
  svg {
    fill: blue;
  }
`;

const Label = styled.label`
  width: 100%;
  font-size: 10px;
  border: 1px solid black;
`;

const Input = styled.input`
  width: 100px;
  height: 50px;
  border: 1px solid black;
`;

function App() {
  const [data, setData] = useState("");
  const count = useSelector((state) => state.counter.value);
  const state = useSelector((state) => state.states.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>{count}</div>
      <Button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </Button>
      <Button
        onClick={() => {
          dispatch(decrease());
        }}
      >
        -
      </Button>
      <div>{state}</div>
      <Button
        onClick={() => {
          dispatch(change(data));
        }}
      ></Button>
      <input value={data} onChange={(e) => setData(e.target.value)}></input>
      <Overflow>123213qwewqewqewqewqewqewqsadsadsadsadsadsadase</Overflow>
      <Postcode></Postcode>
      <SVGcontainer>
        <CancelIcon />
      </SVGcontainer>
      <Label htmlFor="title" aria-label="나 클릭해봥">
        나 클릭해봐
      </Label>
      <Input id="title" title="인풋창입니다." />
    </>
  );
}

export default App;
