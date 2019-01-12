import React, { useState, useEffect } from "react";
import axios from "axios";

const GetData = () => {
    const [data, setData] = useState([]);

    useEffect(
        () =>
            axios
                .get("https://jsonplaceholder.typicode.com/users")
                .then(data => setData(data)),
        {}
    );
    return (
        <>
            {data.length !== 0 && (
                <div>
                    {data.data.map(data => (
                        <p key={data.name}>{data.name}</p>
                    ))}
                </div>
            )}
        </>
    );
};

export default GetData;
