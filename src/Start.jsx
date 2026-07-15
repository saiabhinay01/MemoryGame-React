
export const Start = ({ start }) => {
    return (
        <div className="start-screen">
            <h1 className="start-title">Memory Game</h1>
            <p className="start-text">
                Match all the pairs before the timer runs out.
            </p>

            <button className="start-btn" onClick={start}>
                Start Game
            </button>
        </div>
    );
};