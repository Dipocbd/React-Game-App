import { useState } from "react";
import "./index.css"
import { moneyPyramid, data } from "./Data";
import Quiz from "./components/Quiz";


function App() {
  const [first, setFirst] = useState(1);
  const [timeOut, setTimeOut] = useState(false);
  
  return (
    <div className="app">
     <div className="main">
    <div className="top">
      <div className="timer">30</div>
    </div>
    <div className="bottom">
      <Quiz data ={data} 
      setTimeOut={setTimeOut}
      first={first}
      setFirst={setFirst}/>
    </div>

     </div>
     <div className="pyramid">
      <ul className="moneyList">
      {
        moneyPyramid.map(m=>(
          <li className={first === m.id ? "moneyListItem active" : "moneyListItem"}>
          <span className="moneyListItemNumber">{m.id}</span>
          <span className="moneyListItemAmount">{m.amount}</span>
          </li>
        ))
      }
        
      </ul>
     </div>
    </div>
  );
}

export default App;
