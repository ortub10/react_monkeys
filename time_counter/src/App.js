import "./App.css";

function App() {
  let myDate = "2030-01-01";
  return (
    <div className="App">
      <h2>Count down to {myDate}</h2>
      <h3>Days: XX</h3>
      {/* It will be in own component */}
      <input defaultValue="monkeys" />
      <button className="btn btn-success">change</button>
    </div>
  );
}

export default App;
