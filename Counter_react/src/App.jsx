import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {

  let [counter, setCounter] = useState(0);
  
  const AddNum = () =>{
  
    setCounter(counter+1);
    
  }
  
  const RemoveNum = () =>{
  
    setCounter(counter-1);

    if(counter == 0){

      setCounter(counter);
    }
    
  }

  return (
    <>
      <h1 className='bg-black rounded-xl p-3 mb-2'>This is a Counter</h1>
      <h2>h2 heading</h2>

      <h3>The count is : {counter}</h3>

      <button onClick={AddNum}>Add count</button>
      <button onClick={RemoveNum}>Remove count</button>

      <Card/>
    </>
  )
}

export default App
