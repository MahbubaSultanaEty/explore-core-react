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
   
        <div>
          <h1>React Core Concept</h1>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>


      <Person name="Sultana" prof="Web Developer"></Person>
      <Person name="Ety" prof="Student"></Person>
      <Student></Student>

      <Friends> </Friends>
      <Div></Div>
      <Friends> </Friends>
     
    </>
  )
}

export default App

function Person(props) {
  console.log(props)
  return (
    <div style={{
      color: 'green',
      border: "2px solid green",
      borderRadius: "10px"
    }}>
      <h4>Developer: Mahbuba {props.name}</h4>
      <p>Age: 22</p>
      <p>profession: {props.prof}</p>
    </div>
  )
}

function Friends() {
  
  const ulStyle = {
    color: 'black',
    backgroundColor: 'gray'
  }
  return (
    <ul style={ulStyle}>
      <li>Lamia</li>
      <li>Samia</li>
      <li>Halima</li>
    </ul>
  )
}

function Div() {
  return (
    <div className='div'>
      <p>Para 1: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, consequuntur.
      </p>
      <p>Para 2: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  )
}

function Student() {
  return (
    <div className='student'>
    <p>Name: Mahbuba</p>
      <p>Dept: Political Science</p>
   </div>
  )
}


