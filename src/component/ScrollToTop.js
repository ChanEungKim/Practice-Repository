import styled from "styled-components";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleShowButton);

    // return () => {
    //   window.removeEventListener("scroll", handleShowButton);
    // };
  }, []);

  return (
    <>
      {showButton && (
        <ScrollToTopButton type="button" onClick={scrollToTop}>
          Click
        </ScrollToTopButton>
      )}
    </>
  );
};

const ScrollToTopButton = styled.button`
  position: fixed;
  right: 10%;
  bottom: 10%;
  padding: 50px;
  border: 1px solid black;
  border-radius: 100px;
  background-color: red;
  color: white;
  z-index: 100;
`;

export default ScrollToTop;
