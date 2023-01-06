import "./index.css"

function App() {
  return (
    <div className="app">
     <div className="main">main</div>
     <div className="pyramid">
      <ul className="moneyList">
        <li className="moneyListItem active">
          <span className="moneyListItemNumber">4</span>
          <span className="moneyListItemAmount">₦500</span>
          </li>
          <li className="moneyListItem">
          <span className="moneyListItemNumber">4</span>
          <span className="moneyListItemAmount">₦500</span>
          </li>
          <li className="moneyListItem">
          <span className="moneyListItemNumber">4</span>
          <span className="moneyListItemAmount">₦500</span>
          </li>
          <li className="moneyListItem">
          <span className="moneyListItemNumber">4</span>
          <span className="moneyListItemAmount">₦500</span>
          </li>
        
      </ul>
     </div>
    </div>
  );
}

export default App;
