import './App.css';
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(previousCount => previousCount + 1);
  }

  return (
    <div className="App">
      <div
        className='counter'
      >
        {count}
      </div>
      <button
        className='counter__increment'
        onClick={incrementCounter}
      >
        Click 👆
      </button>
    </div>
  );
}

export default App;
