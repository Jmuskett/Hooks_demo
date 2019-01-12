import React, { useReducer } from "react";
import { StateHookTest } from "./StateHookTest";

const AppState = props => {
    const StyleReducer = (state, action) => {
        switch (action.type) {
            case "test1":
                return { ...state, color: "#000080", textColor: "#e6e6ff" };
            case "test2":
                return { ...state, color: "#fffff", textColor: "#000080" };
            default:
                return state;
        }
    };

    const initialState = {
        color: "#6666ff",
        textColor: "#e6e6ff"
    };

    const [state, dispatch] = useReducer(StyleReducer, initialState);

    return <StateHookTest state={state} dispatch={dispatch} />;
};

export default AppState;
