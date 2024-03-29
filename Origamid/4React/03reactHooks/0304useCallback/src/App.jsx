import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const set1 = new Set();
const set2 = new Set();

const Produto = () => {

  const func1 = () => {
    console.log("Teste");
  }

  const func2 = React.useCallback(() => {
    console.log("Teste");
  }, []);

  set1.add(func1);
  set2.add(func2);

  console.log("Set1: " + set1);
  console.log("Set2: " + set2);

  return (
    <div>
      <p onClick={func1}>Produto 1</p>
      <p onClick={func2}>Produto 2</p>
    </div>
  )
}

function App() {
  const [count, setCount] = React.useState(0)

  const handleClick = React.useCallback(() => {
    setCount((count) => count + 1);
  }, [])

  return (
    <div>
      <Produto />
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}

export default App
