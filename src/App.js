// import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
let stateValue;
function useState(initState) {
  if(stateValue ===undefined) stateValue=initState;
  function setValue(val){
    stateValue=val;
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
  return [stateValue, setValue];
}


function App() {
  const [counter, setCounter]= useState(1);
  const handleIncrement= function() {
    setCounter(counter+1);
  }
  const handleDecrement= function() {
    setCounter(counter-1);
  }
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;

//create state to manage Counter
//when state changes, UI changes
