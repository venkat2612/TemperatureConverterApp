import React, {useState} from 'react'
import './App.css';


function App() {
  const [value, setValue] = useState();
  const [convertedTemperature, setConvertedTemperature] = useState()
  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  }
  const handleCelciusToFahrenheit =() => {
    console.log("value", value);
    const fahrenheit = (value * 9/5) + 32;
    console.log("fahrenheit", fahrenheit);
    setConvertedTemperature(fahrenheit) 
  }
  const handleFahrenheitToCelcius =() => {
    console.log("value", value);
    const celcius = (value -32) *5/9
    console.log("celcius", celcius); 
    setConvertedTemperature(celcius)
  }
  return (
    <div className="App">
      <h1>Temperature Coverter App</h1>
      <div className='container'>
      <div>Enter Temperature to convert: <input type='number' onChange={handleChange}/></div>
      <div>
      <button className='button' onClick={handleCelciusToFahrenheit}>Celcius To Fahrenheit</button>
      <button className='button'  onClick={handleFahrenheitToCelcius}>Fahrenheit To Celcius</button>
      </div>
      </div>
      <h3>Converted Temperature: {convertedTemperature}</h3>
    </div>
  );
}

export default App;
