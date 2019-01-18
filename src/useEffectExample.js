import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const useEffectExample = () => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(
    () =>
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(data => setData(data)),
    []
  );
  return (
    <Styling>
      {toggle === false && (
        <div>
          <h1>
            Give me some data!{" "}
            <span onClick={() => setToggle(true)}>{`\u{2705}`}</span>
          </h1>
        </div>
      )}
      {toggle === true && (
        <div>
          <h1>
            Failing data, ratings way down. Sad!{" "}
            <span onClick={() => setToggle(false)}> {`\u{274C}`} </span>
          </h1>
        </div>
      )}
      {toggle === true &&
        (data.length !== 0 && (
          <div>
            {data.data.map(data => (
              <p key={data.name}>{data.name}</p>
            ))}
          </div>
        ))}
    </Styling>
  );
};

export default useEffectExample;

const Styling = styled.div`
  font-size: 28px;
  letter-spacing: 0.2rem;
  margin: 50px;

  span:hover {
    cursor: pointer;
  }
`;
