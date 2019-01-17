import React, { useReducer } from "react";
import styled from "styled-components";

const ReducerDemo = () => {
  const StyleReducer = (state, action) => {
    switch (action.type) {
      case "test1":
        return { ...state, color: "#000080", textColor: "#e6e6ff" };
      case "test2":
        return { ...state, color: "#6666ff", textColor: "yellow" };
      default:
        return state;
    }
  };

  const initialState = {
    color: "#6666ff",
    textColor: "#e6e6ff"
  };

  const [state, dispatch] = useReducer(StyleReducer, initialState);

  const Styling = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${state.color};
    height: 70vh;
    font-size: 2rem;
    padding: 2rem;
    color: ${state.textColor};
    clip-path: polygon(0 0, 100% 0, 100% 44%, 0% 100%);
    z-index: 0;
  `;
  return (
    <>
      <Styling>
        <h1>React hooks demo</h1>
        <p>...Beware of Captain Hook</p>
      </Styling>

      <Implementation onClick={() => dispatch({ type: "test1" })}>
        <p> {` \u{1F37A}`}</p>
      </Implementation>

      <Implementation onClick={() => dispatch({ type: "test2" })}>
        <p>{`\u{1F32D}`}</p>
      </Implementation>
    </>
  );
};

export default ReducerDemo;

const Implementation = styled.div`
  display: inline-flex;
  justify-content: center;
  margin: 100px;
  font-size: 60px;

  p:hover {
    cursor: pointer;
  }
`;
