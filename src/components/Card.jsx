export const Card=({card,fun})=>{
    return(
        <div className={card.isFlipped? "card flipped":"card"} onClick={()=>fun(card)}>
            <div className="card-front">?</div>
            <div className="card-back">{card.value}</div>
        </div>
    );
};