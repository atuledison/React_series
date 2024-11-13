import { useState } from 'react'
import React from 'react'

function App() {

  let [color, setColor] = useState('black');

  return (
    <>
    <body className='h-screen w-full' style={{backgroundColor: color}}>

    {/* <h1 className='flex justify-center text text-center'>My name is Atul Yadav</h1> */}

    <div className='fixed flex text-white flex-wrap justify-center text-center bottom-12 inset-x-0 px-2'>
      <div className='border-[2px] px-2 py-1 m-2 bg-black rounded-3xl text-center flex justify-center flex-row'>
       <button
       onClick={() => setColor('red')}
       className='outline-none px-4 py-1 m-2 bg-red-600 rounded-3xl text-center text-black'
       
       >Red</button>
       <button
       onClick={() => setColor('green')}
       className='outline-none px-4 py-1 m-2 bg-green-600 rounded-3xl text-center text-black'
       
       >Green</button>
       <button
       onClick={() => setColor('yellow')}
       className='outline-none px-4 py-1 m-2 bg-yellow-300 rounded-3xl text-center text-black'
       
       >Yellow</button>
       <button
       onClick={() => setColor('skyblue')}
       className='outline-none px-4 py-1 m-2 bg-sky-400 rounded-3xl text-center text-black'
       
       >Skyblue</button>
       <button
       onClick={() => setColor('orange')}
       className='outline-none px-4 py-1 m-2 bg-orange-600 rounded-3xl text-center text-black'
       
       >Orange</button>
       <button
       onClick={() => setColor('blue')}
       className='outline-none px-4 py-1 m-2 bg-blue-800 rounded-3xl text-center text-black'
       
       >Blue</button>
       <button
       onClick={() => setColor('purple')}
       className='outline-none px-4 py-1 m-2 bg-purple-600 rounded-3xl text-center text-black'
       
       >Purple</button>
      </div>
    </div>

    </body>
    </>
  )
}

export default App