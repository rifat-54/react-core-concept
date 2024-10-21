// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import User from './User'

function App() {
  // const [count, setCount] = useState(0)

  function handalarClick(){
    alert('button clicked')
  }

  const handalar2=()=>{
    alert("button 2 clicked")
  }
  const addFive=(num)=>{
    alert(num+5);
  }

  return (
    <>
     
      <h1> React</h1>
      <Friends></Friends>
      <User></User>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handalarClick}>click me</button>
      <button onClick={handalar2}>click me 2</button>
      <button onClick={()=>alert('clicked 3 button')}>click me 3</button>
      <button onClick={()=>addFive(4)}>button 4</button>
      
      
    
    </>
  )
}

export default App
