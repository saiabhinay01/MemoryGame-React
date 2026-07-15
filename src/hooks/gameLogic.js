import { useState,useEffect,useRef} from "react";
export const gameLogic = ({cardValues}) =>{
        const [cards,setCards] = useState([]);
        const [fc,setfc]=useState([]);
        const [m,setm]=useState(0);
        const [time,settime]=useState(60);
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
            setfc([]);
            setm(0);
            setBusy(false);
        };
        useEffect(()=>{init()},[]);
    
        const handleClick=(card)=>{
            if(busy || card.isFlipped || card.isMatched){
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
    
            const nfc = [...fc,card.id];
            setfc(nfc);
    
            if(fc.length==1){
                setm(prev=> prev+1);
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
        const won = cards.length > 0 && cards.every(card => card.isMatched);

        return {cards,m,time,won,init,handleClick};
}