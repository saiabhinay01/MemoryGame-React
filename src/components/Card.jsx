export const Card=({card,fun})=>{
    return(
        <div className={`card ${card.isFlipped? "flipped":""} ${card.isMatched? "matched":""}`} 
        onClick={()=>fun(card)}>
            <div className="card-front">?</div>
            <div className="card-back">{card.value}</div>
        </div>
    );
};