import "./MainText.css";

const Colors = ({ opacity }) => {
    return (
        <div className="MainText">
            <h1 className={`opacity-${opacity}`}>NANI?!</h1>
        </div>
    );
};

export default Colors;
