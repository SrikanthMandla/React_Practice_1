import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import {useState} from 'react'

function App() {
 
const [counters, setCounter] = useState([{id: 1, value: 0}]);

const addCounter = () => {
  setCounter([...counters, {id:counters.length + 1, value : 0}]);
};


const incrementCounter = (id) => {
      setCounter(counters.map(counter => 
          counter.id == id ? 
          {...counter, value: counter.value + 1}
           : counter
          ) 
          );
};


const decrementCounter = (id) => {
    
}
 
    <div className = 'app-container'>
       <h1>Hello </h1>  
         <button onClick={addCounter}>Add Counter</button>
         <ul>
          {counters.map(counter => (
            <li>
              Counter {counter.id} : {counter.value} 
              <button onClick={()=> incrementCounter(counter.id)}>Increment</button>
              <button onClick={() => {}}>Decrement</button>
            </li>
          ))}
         </ul>
    </div>
  )
}

export default App
