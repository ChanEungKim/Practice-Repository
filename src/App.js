import "./AppStyle.js";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrease } from "./pages/counterSlice";
import { change } from "./pages/state";
import { useState } from "react";
import { Postcode } from "./pages/daumAddress";
import { ReactComponent as CancelIcon } from "./assets/icons/cancleIcon.svg";
import {
  Input,
  Label,
  SVGcontainer,
  Overflow,
  Button,
  Transform,
} from "./AppStyle";

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
      <textarea></textarea>
      <Transform />
    </>
  );
}

export default App;
