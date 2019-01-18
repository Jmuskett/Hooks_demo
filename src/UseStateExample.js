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
          <Img src={CaptainHook} alt="hook" height={400} />
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
  margin: 50px;
  span:hover {
    cursor: pointer;
  }

  span {
    font-size: 60px;
  }
`;

const AnimateHook = keyframes`
from {
    opacity: 0;
    margin-left: 2000px
}
50% {
    opacity: 0.5;
}
to {
    opacity: 1;
    margin-left: 0px;
}
`;

const Img = styled.img`
  animation: ${AnimateHook} 1s linear;
`;
