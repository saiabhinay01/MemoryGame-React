export const GameHeader=({time,moves})=>{
    return( 
    <div className="game-header">
        <h1>MEMORY GAME</h1>
        <div className="stats">
            <div className="stat-item">
                <span className="stat-label">Time:</span>
                <span className="stat-value">{time}</span>
            </div><div className="stat-item">
                <span className="stat-label">Moves:</span>
                <span className="stat-value">{moves}</span>
            </div>
        </div>
    </div>
    );
};