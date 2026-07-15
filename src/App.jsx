import { GameHeader } from "./components/GameHeader"
import { Card } from "./components/Card";
import {WinMessage} from "./components/WinMessage";
import { LoseMessage } from "./components/LoseMessage";
import { useGameLogic } from "./hooks/gameLogic";
import { useState } from "react";
import { Start } from "./Start";

const cardValues= ["🍹","🥐","🥯","🍕","🍔","🌭","🧀","🧁",
"🍹","🥐","🥯","🍕","🍔","🌭","🧀","🧁"
]

function App() {
    const {cards,m,time,init,won,lose,handleClick,id}=useGameLogic(cardValues);
    const [start,setStart] = useState(false);
    if(!start){
        return(
            <Start start={()=>{
                init();
                setStart(true);
            }}/>
        )
    }
    return (
    <div className="app">
        <GameHeader time={time} moves={m}/>
        {won && <WinMessage moves={m} reset={init}/>}
        {lose &&<LoseMessage/>}
        <div className="cards-grid">
            {cards.map((card)=>(
                <Card key={card.id} card={card} fun={handleClick}/>
            )
            )}
        </div>
    </div>
    );
};

export default App