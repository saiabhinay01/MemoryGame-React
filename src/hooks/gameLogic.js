import { useState,useEffect,useRef} from "react";
export const useGameLogic = (cardValues) =>{
        const [cards,setCards] = useState([]);
        const [fc,setfc]=useState([]);
        const [m,setm]=useState(0);
        const [time,setTime]=useState(60);
        const [busy,setBusy]=useState(false);
        const id=useRef(null);
    
        const init=()=>{
            //SHUFFLE
            let cc = [...cardValues];
            if(id.current!=null){
                clearInterval(id.current);
                id.current=null;
            }
            setTime(3);
            id.current = setInterval(() => {
                setTime(prev => {
                    if (prev <= 0) return 0;
                    return prev - 1;
                });
            }, 1000);

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
            if(lose || busy || card.isFlipped || card.isMatched){
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
        const lose = (time===0&&!won);
        useEffect(()=>{
            if(won){
                clearInterval(id.current);
            }

            if(lose){
                clearInterval(id.current);

                setCards(prev =>
                    prev.map(c=>({
                        ...c,
                        isFlipped:true
                    }))
                );
            }
        },[won,lose]);
        return {cards,m,time,won,lose,init,handleClick,id};
}