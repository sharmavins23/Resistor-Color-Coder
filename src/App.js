import React, { useState, useCallback } from "react";
import InputBar from "./InputBar";
import Readout from "./Readout";

function App() {
    const [input, setInput] = useState("");

    const updateInput = useCallback(
        (text) => {
            setInput(text);
        },
        [input]
    );

    return (
        <div className="App">
            <InputBar updateInput={updateInput} />
            <Readout input={input} />
        </div>
    );
}

export default App;
