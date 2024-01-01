import { useState } from 'react'
import './App.css'
import Accordion from './components/Accordion/Accordion'
//import Accordion from './components/AccordionAnimation/Accordion'


function App() {
  const [count, setCount] = useState(0)

  return (

    <div className='app'>
      <Accordion />
    </div>
   
  )
}

export default App
