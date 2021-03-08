import React, { useState } from "react";

const FirstPage = () => {
    const [state, setState] = useState("CLICK ME");

    const changeState = () => {
        if (state === "CLICK ME") {
            setState("CLICKED")
            return;
        }

        setState("CLICK ME")
    }

    return (
        <div>
            <button onClick={() => changeState()}>{state}</button>
        </div>
    );
}

export default FirstPage
