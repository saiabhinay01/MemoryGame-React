export const WinMessage=({moves,reset})=>{
    return (
        <div className="win-message">
            <h2>Congratulations!</h2>
            <p>You won with Accuracy: {(8/moves*100).toFixed(1)}</p>
            <br/>
            <button className="reset-btn" onClick={reset}>New Game</button>
        </div>
    )
}