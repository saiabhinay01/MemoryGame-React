import { GameHeader } from "./components/GameHeader"
import { Card } from "./components/Card";
import {WinMessage} from "./components/WinMessage";
import { LoseMessage } from "./components/LoseMessage";
import { gameLogic } from "./hooks/gameLogic";

const cardValues= ["🍹","🥐","🥯","🍕","🍔","🌭","🧀","🧁",
"🍹","🥐","🥯","🍕","🍔","🌭","🧀","🧁"
]

function App() {
    const {cards,m,time,init,won,handleClick}=gameLogic(cardValues);
    return (
    <div className="app">
        <GameHeader time={time} moves={m}/>
        {won && <WinMessage moves={m} reset={init}/>}
        <LoseMessage/>
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