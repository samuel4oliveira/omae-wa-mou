import "./MainButton.css";

const MainButton = ({ setOpacity, setImage }) => {
    const omaeWaSound = new Audio("/assets/audios/omae-wa.mp3");
    const naniSound = new Audio("/assets/audios/nani.mp3");

    const resetReaction = () => {
        setImage("./assets/imgs/girl-blink.svg");
        setOpacity(0);
    };

    const naniReaction = () => {
        naniSound.play();
        setOpacity(1);
        setImage("./assets/imgs/girl.svg");
        setTimeout(resetReaction, 3000);
    };

    const OmaeWaReaction = () => {
        omaeWaSound.play();
        setTimeout(naniReaction, 2300);
    };

    return (
        <button className="MainButton" onClick={OmaeWaReaction}>
            OMAE WA MOU SHINDEIRU
        </button>
    );
};

export default MainButton;
