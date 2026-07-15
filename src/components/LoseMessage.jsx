export const LoseMessage=({reset})=>{
    return (
        <div className="win-message">
            <h2>YOU LOST! 😞</h2>
            <br/>
            <button className="reset-btn" onClick={reset}>Retry</button>
        </div>
    )
}