/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector, useDispatch } from "react-redux";
import { increment, decrease } from "../practice/counterSlice";
import { change } from "../practice/state";
import { useState } from "react";
import { Postcode } from "../practice/daumAddress";
import { ReactComponent as CancelIcon } from "../assets/icons/cancleIcon.svg";
import {
  Input,
  Label,
  SVGcontainer,
  Overflow,
  Button,
  Transform,
  ClickMove,
  Div,
  AlertButton,
  OrderBox1,
  OrderBox2,
  OrderContainer,
  ModalButton,
  UseNavigate,
} from "../AppStyle";
import Modal from "../component/modal";
import { useNavigate } from "react-router-dom";

const Page1 = () => {
  const [data, setData] = useState("");
  const [isModal, setIsModal] = useState(false);

  const count = useSelector((state) => state.counter.value);
  const state = useSelector((state) => state.states.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const AlertMessage = () => {
    if (window.confirm("정말 삭제합니까?")) {
      alert("삭제되었습니다");
    } else {
      alert("취소합니다");
    }
  };

  const ModalOpen = () => {
    setIsModal(true);
  };

  const ModalClose = () => {
    setIsModal(false);
  };

  const Navigate = () => {
    navigate("/page2/1");
  };

  const createdAt = new Date().toLocaleDateString();
  console.log(createdAt);

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

      <Overflow id="top">
        123213qwewqewqewqewqewqewqsadsadsadsadsadsadase
      </Overflow>

      <Postcode></Postcode>

      <SVGcontainer>
        <CancelIcon />
      </SVGcontainer>

      <Label htmlFor="title" aria-label="나 클릭해봥">
        나 클릭해봐
      </Label>
      <Input id="title" title="인풋창입니다." type="time" />

      <textarea></textarea>

      <Transform />

      <AlertButton onClick={AlertMessage}>AlertButton</AlertButton>

      <OrderContainer>
        <OrderBox1>1111</OrderBox1>
        <OrderBox2>2222</OrderBox2>
      </OrderContainer>

      <ModalButton onClick={ModalOpen}>ModalButton</ModalButton>
      <Modal ModalClose={ModalClose} isModal={isModal} />

      <Div />
      <ClickMove href="#top">Click</ClickMove>
      <UseNavigate onClick={Navigate}>Navigate</UseNavigate>
    </>
  );
};

export default Page1;
