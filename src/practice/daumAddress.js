/* eslint-disable react/jsx-no-comment-textnodes */
//npm install react-daum-postcode
import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import styled from "styled-components";

const AddressDiv = styled.div`
  width: 150px;
  height: 30px;
  border: 1px solid black;
`;

export const Postcode = () => {
  const [isOpenPost, setIsOpenPost] = useState(false);
  const [address, setAddress] = useState("");

  const onChageOpenPost = () => {
    setIsOpenPost(!isOpenPost);
  };

  const onCompletePost = (data) => {
    setAddress(data.address);
    console.log(data);
    setIsOpenPost(false);
  };

  const PostStyle = {
    width: "100%",
    // height: "500px",
  };

  return (
    <>
      {isOpenPost && (
        <div onClick={onChageOpenPost}>
          <div>X</div>
          <DaumPostcode
            onComplete={onCompletePost}
            style={PostStyle}
          ></DaumPostcode>{" "}
          //onComplete에 데이터가 담겨온다
        </div>
      )}
      ;
      <button type="button" onClick={onChageOpenPost}>
        Open
      </button>
      <AddressDiv>{address}</AddressDiv>
    </>
  );
};
