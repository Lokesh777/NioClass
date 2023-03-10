import { useEffect, useState } from "react";
import "./Allsol.css"

export default function AllSolutions() {
    const [items, setItems] = useState([]);
    const [question, setquestion] = useState([]);


    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("question"));
        console.log(items);

        if (items) {
            setquestion(items);
        }
    }, []);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("answer"));
        console.log(items);

        if (items) {
            setItems(items);
        }
    }, []);
// console.log(JSON.parse(localStorage.getItem("answer")))
    return (
        <div className="contain" >
           <div style={{borderRight:"2px solid red"}}>
             
                  <h2 style={{textAlign:"center",color:"red"}}> Questions</h2>
                    {question.map((ele, i) => (
                        <div
                        className="eachproblem"                           
                            key={i}
                        >   
                            <p>{ele}</p>
                        </div>
                    ))}
           </div>

           <div>
             <h2 style={{textAlign:"center",color:"green"}}> Answers</h2>
                {items.map((ele, i) => (
                    <div
                       className="eachproblem2"
                        key={i}
                    >   
                        <p>{ele}</p>
                    </div>
                ))}
           </div>
        </div>
    );
}
