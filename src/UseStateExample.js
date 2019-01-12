import React, { useState } from "react";
import styled from "styled-components";

export const UseStateExample = () => {
    let Card = styled.div`
        background-color: white;
        padding: 10rem 0;
        margin: 0rem 50rem;
        color: #000080;
    `;

    const [count, setCount] = useState(0);
    const incrementNumber = () => setCount(count + 1);
    const decrementNumber = () => {
        if (count !== 0) {
            setCount(count - 1);
        }
    };

    return (
        <>
            {count === 0 && <Card>Ain't got no count</Card>}
            {count > 0 && <Card>{count}</Card>}
            <div>
                <div onClick={incrementNumber}>Click here to increment</div>
                <div onClick={decrementNumber}>Click here to decrement</div>
            </div>
        </>
    );
};
