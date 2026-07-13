import { GameHeader } from "./components/GameHeader"
import { Card } from "./components/Card";
import { useState,useEffect,useRef} from "react";

const cardValues= ["🍹","🥐","🥯","🍕","🍔","🌭","🧀","🧁",
"🍹","🥐","🥯","🍕","🍔","🌭","🧀","🧁"
]

function App() {
    const [cards,setCards] = useState([]);
    const [fc,setfc]=useState([]);
    const [m,setm]=useState(0);
    const [busy,setBusy]=useState(false);

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
        if(busy || card.isFlipped || card.isMatched){
            return;
        }
        
        setm(prev=> prev+1);
        const nc = cards.map((c)=>{
            if(c.id === card.id){
                return {...c,isFlipped:true};
            }
            else{
                return c;
            }
        })
        setCards(nc);

        const nfc = [...fc,card.id];
        setfc(nfc);

        if(fc.length==1){
            const first = cards[fc[0]];
            if(first.value==card.value){
                const mc = nc.map((c)=>{
                    if(c.id === card.id || c.id==first.id){
                        return {...c,isMatched:true};
                    }
                    else{
                        return c;
                    }
                })
                setCards(mc);
                setfc([]);
            }
            else{
                const nnc = nc.map((c)=>{
                    if(c.id === card.id || c.id===first.id){
                        return {...c,isFlipped:false};
                    }
                    else{
                        return c;
                    }
                })
                setBusy(true);
                setTimeout(()=>{
                    setCards(nnc);
                    setfc([]);
                    setBusy(false);
                },550);
            }
        }
        
    };

    return (
    <div className="app">
        <GameHeader score={3} moves={m}/>
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