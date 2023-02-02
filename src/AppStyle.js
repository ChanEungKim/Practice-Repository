import styled from "styled-components";

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

const Transform = styled.div`
  width: 100px;
  height: 50px;
  border: 1px solid black;
  transform: scale(1, 1);
  //scale(x축, y축)
  //translate (x축,y축) x축으로 10px ,y축으로 10px

  &:hover {
    transition: background-color 0.5s ease-in-out;
    //변화시킬css속성명 변화가얼마동안일어날지지속시간 변화가속도
    background-color: red;
  }
`;

const ClickMove = styled.a`
  border: 1px solid black;
`;

const Div = styled.div`
  width: 20px;
  height: 2000px;
`;
const AlertButton = styled.button`
  width: 100px;
  height: 30px;
  border: 1px solid black;
`;

const OrderContainer = styled.div`
  display: grid;
  width: 100%;
`;

const OrderBox1 = styled.div`
  width: 50px;
  height: 50px;
  background-color: red;
  order: 2;
`;

const OrderBox2 = styled.div`
  width: 50px;
  height: 50px;
  background-color: blue;
  order: 1;
`;

const ModalButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: green;
`;

const ModalWrapper = styled.div`
  position: fixed;
  display: ${(props) => (props.isModal ? "block" : "none")};
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 95;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 25%;
  left: 25%;
  width: 100%;
  height: 300px;
  max-width: 435px;
  background-color: white;
  z-index: 99;
  transition: transform 0.5s;
  transform: translate(0%, 0%)
    ${(props) => (props.isModal ? "translateY(0)" : "translateY(-200%)")};
`;

const UseNavigate = styled.button`
  width: 100px;
  height: 30px;
  background-color: green;
`;

export {
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
  ModalWrapper,
  ModalContainer,
  UseNavigate,
};
