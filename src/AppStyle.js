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

export { Input, Label, SVGcontainer, Overflow, Button, Transform };
