import { GameHeader } from "./components/GameHeader"
import { Card } from "./components/Card";
import { useState,useEffect} from "react";

const cardValues= ["🍹","🥐","🥯","🍕","🍔","🌭","🧀","🧁",
"🍹","🥐","🥯","🍕","🍔","🌭","🧀","🧁"
]

function App() {
    const [cards,setCards] = useState([]);

    const init=()=>{
        //SHUFFLE
        let cc = [...cardValues];
        let finalcards = [];
        while(cc.length>0){
            let k = Math.floor(Math.random()*(cc.length));
            finalcards.push(cc[k]);
            cc.splice(k,1);
        }
        setCards(finalcards.map((value,index)=>(
            {
                id:index,
                value,
                isFlipped: false,
                isMatched: false
            }
        )));
    };
    useEffect(()=>{init()},[]);

    const handleClick=(card)=>{
        if(card.isFlipped || card.isMatched){
            return;
        }

        const nc = cards.map((c)=>{
            if(c.id === card.id){
                return {...c,isFlipped:true};
            }
            else{
                return c;
            }
        }) 
        setCards(nc);
    };

    return (
    <div className="app">
        <GameHeader score={3} moves={2}/>
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