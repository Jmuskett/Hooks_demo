import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import CaptainHook from "./Captain_Hook_pose.jpg";

export const UseStateExample = () => {
  const [count, setCount] = useState(0);
  const incrementNumber = () => setCount(count + 1);
  const decrementNumber = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };

  return (
    <Styling>
      {count >= 10 && (
        <div>
          {" "}
          <Img src={CaptainHook} alt="hook" height={400} />
          <p>Hooked!</p>{" "}
        </div>
      )}

      <p>Abritrary Counter: {count}</p>
      <span onClick={incrementNumber}> {` \u{261D}`} </span>
      <span onClick={decrementNumber}> {`\u{1F447}`}</span>
    </Styling>
  );
};

const Styling = styled.div`
  font-size: 28px;
  letter-spacing: 0.2rem;

  span:hover {
    cursor: pointer;
  }

  span {
    font-size: 60px;
  }
`;

const AnimateHook = keyframes`
from {
    margin-left: 2000px
}
to {
    margin-left: 0px;
}
`;

const Img = styled.img`
  animation: ${AnimateHook} 0.2s linear;
`;
