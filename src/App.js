import React, { useState } from "react";
import MainText from "./MainText.js";
import MainImage from "./MainImage.js";
import MainButton from "./MainButton.js";
import "./App.css";

function App() {
    const [opacity, setOpacity] = useState(0);
    const [image, setImage] = useState("./assets/imgs/girl-blink.svg");

    return (
        <div className="App">
            <MainText opacity={opacity} />
            <MainImage image={image} />
            <MainButton setOpacity={setOpacity} setImage={setImage} />
        </div>
    );
}

export default App;
