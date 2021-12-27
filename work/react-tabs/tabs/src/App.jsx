import './App.css';
import {useState} from 'react';
import Accordion from './Accordion';

const accordionData = {
  'Go out' : `Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...`,
  'Sleep at Home' : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis nisl nulla, eget tristique ligula vestibulum ac. Sed facilisis venenatis ex id varius. Curabitur a justo vestibulum, scelerisque nisl a, egestas tortor. Nullam semper faucibus hendrerit. Quisque in dolor et dolor placerat hendrerit accumsan ut lectus.`, 
  'Netflix and Chill' : `Praesent viverra tristique mauris, ut lacinia tortor lacinia id. Morbi vitae mauris lacus. Nunc dolor nunc, laoreet convallis sem in, lobortis suscipit tellus. Sed dolor nisi, fermentum eget enim imperdiet, eleifend tempor tortor. `
};

function App() {
  const [data] = useState(accordionData);

  return (
    <div className="app">
      <Accordion content={data}/>      
    </div>
  );
}

export default App;
