import styled from "styled-components";
import React, { Suspense } from "react";
import { UseStateExample } from "./UseStateExample";
const GetData = React.lazy(() => import("./GetData"));

export const StateHookTest = props => {
    const { state, dispatch } = props;

    const Styling = styled.div`
        display: flex;
        flex-direction: column;
        background-color: ${state.color};
        height: 150vh;
        font-size: 2rem;
        padding: 2rem;
        color: ${state.textColor};
    `;

    return (
        <Styling>
            <div>
                <UseStateExample />
            </div>
            <div>
                <button onClick={() => props.dispatch({ type: "test1" })}>
                    click here for color 1
                </button>

                <button onClick={() => props.dispatch({ type: "test2" })}>
                    click here for color 2
                </button>
                <Suspense fallback={<div>Loading...</div>}>
                    <GetData />
                </Suspense>
            </div>
        </Styling>
    );
};
