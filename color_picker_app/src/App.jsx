
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { useState } from 'react';


function App() {
  const [BackgroundColor, setBackgroundColor] = useState("#ffffff");

  const colors = ["#ff0000", "#C0C0C0", "#000000", "#008000", "#000080", "#800080", "#00FFFF"];
  const handleColorChange = (color) => {
        setBackgroundColor(color);
  }
  return (
    <div className='App' style={{background: BackgroundColor}}>
      <h1>Color picker app</h1>
       <div className='color-palate'>
          {
            colors.map((color,index) => (
               <div key={index}
                  className='color-box'
                  style={{backgroundColor : color }}
                  onClick={() => {handleColorChange(color)}}
                  >
               </div>
            ))
          }
       </div>


       <div className='custom-color-picker'>
          <input
          type="color"
          value= {BackgroundColor}
          onChange={(e) => handleColorChange(e.target.value)} >
          </input>
       </div>
    </div>
  )
}

export default App
