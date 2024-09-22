import { useState } from 'react';
import './App.css';

function App() {

  const [display,setDisplay] = useState("");
  const [expression,setExpression] = useState([]);

  const handleClick = (value) => {
    setDisplay(value);
    setExpression([...expression,value]);
  }

  const clearCalc = () => {
    setExpression([]);
    setDisplay("");
  }

  const handleResult = () => {
    const result = expression
    .join("")
    .split(/(\D)/g)
    .map((value) => value.match(/\d/g) ? parseInt(value, 0) : value)
    .reduce((acc,value,index,array) => {
      switch (value) {
        case "+": 
          return (acc = acc + array[index + 1]);
        case "-":
          return (acc = acc - array[index + 1]);
        case "×":
          return (acc = acc * array[index + 1]);
        case "÷": 
          return (acc = acc / array[index + 1]);
        default:
          return acc;
      }
    });
    setDisplay(result);
    setExpression([]);
  }

  return (
    <>
    <div className='app'>

      <h3 className='display'>{display}</h3>

      <p className='expression'>{expression}</p>

      <div className='panel'>
        <div className='numbers'>
          <button onClick={() => handleClick(7)} className='seven'>7</button>
          <button onClick={() => handleClick(8)} className='eight'>8</button>
          <button onClick={() => handleClick(9)} className='nine'>9</button>
          <button onClick={() => handleClick(4)} className='four'>4</button>
          <button onClick={() => handleClick(5)} className='five'>5</button>
          <button onClick={() => handleClick(6)} className='six'>6</button>
          <button onClick={() => handleClick(1)} className='one'>1</button>
          <button onClick={() => handleClick(2)} className='two'>2</button>
          <button onClick={() => handleClick(3)} className='three'>3</button>
          <button onClick={() => handleClick(0)} className='zero'>0</button>
        </div>

        <div className='operators'>
          <button onClick={() => handleClick("÷")}>÷</button>
          <button onClick={() => handleClick("×")}>×</button>
          <button onClick={() => handleClick("-")}>-</button>
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={() => handleResult()}>=</button>
          <button onClick={clearCalc}>Clear</button>
        </div>
      </div>

    </div>
    </>
  )
};

export default App;
