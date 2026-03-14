import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>


      <div className="ticks"></div>
      <section id="spacer"></section>

      <Friends> </Friends>
      <Div></Div>
    <Friends> </Friends>
    </>
  )
}

export default App

function Friends(){
  return (
    <ul>
      <li>Lamia</li>
      <li>Samia</li>
      <li>Halima</li>
    </ul>
  )
}

function Div() {
  return (
    <div>
      <p>Para 1: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, consequuntur.
      </p>
      <p>Para 2: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  )
}
