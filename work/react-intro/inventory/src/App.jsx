import './App.css';
import { useState } from 'react';
import Reorder from './Reorder';

function App() {
  const [count, setCount] = useState(0);

  const onReorder = () => {
    setCount(5);
   };

  return (
    <div className="app">
      <main>
        <p>Count {count}</p>
        { count === 0 && <Reorder onReorder={onReorder}/>}
        <button type="button" onClick={ () => setCount(count+1)}>Increase (+)</button>
        <button type="button" disabled={!count} onClick={ () => setCount(count-1)}>Decrease (-)</button>
      </main>
    </div>
  );
}


export default App;
