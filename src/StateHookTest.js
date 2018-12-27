import React, { useState, useEffect } from "react";
import axios from "axios";

export const StateHookTest = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState(null);
    const [data, setData] = useState([]);

    const incrementNumber = () => setCount(count + 1);
    const decrementNumber = () => setCount(count - 1);

    useEffect(
        () =>
            axios
                .get("https://jsonplaceholder.typicode.com/users")
                .then(data => setData(data)),
        {}
    );

    console.log(data);
    return (
        <div>
            The count is {count}
            <button onClick={incrementNumber}>Click here to increment</button>
            <button onClick={decrementNumber}>Click here to decrement</button>
            {data.length !== 0 && (
                <div>
                    {data.data.map(data => (
                        <p>{data.name}</p>
                    ))}
                </div>
            )}
        </div>
    );
};
