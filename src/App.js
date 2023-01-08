import { useState } from "react";
import "./index.css"
import { moneyPyramid } from "./Data";
import Quiz from "./components/Quiz";

function App() {
  const [first, setfirst] = useState(1)
  return (
    <div className="app">
     <div className="main">
    <div className="top">
      <div className="timer">30</div>
    </div>
    <div className="bottom">
      <Quiz/>
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
