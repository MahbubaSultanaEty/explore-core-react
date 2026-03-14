import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


/** React  এ JSX এ style add করার ৩টা common নিয়ম
 * (External CSS) থেকে Style : CSS file এ style লিখো & JSX এ className ব্যবহার করো
 * একটা JavaScript object বানিয়ে সেটাকে Object Variable থেকে Style  হিসেবে use করা যায়।
 * JSX এর ভিতরেই সরাসরি object লিখে inline style দেওয়া।
 * 
*/ 
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

      <Product name="laptop" price="30000"></Product>
      <Product name="Tablet" price="8000"></Product>

      <Friends> </Friends>
      <FullName fName="Sokhina" lName="Begum"></FullName>
      <FullName fName="Kamruzzaman" ></FullName>
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


function Product({name, price}) {
  return (
    <div style={{
      padding: "10px",
      margin: "20px",
      border: "2px solid "
    }}>
      <p>Product Name: { name}</p>
      <p>Price: { price}</p>
   </div>
  )
}
function FullName({fName, lName=" "}) {
  return (
    <div>
      <p>First Name: { fName}</p>
      <p>Last Name: { lName}</p>
    </div>
  )
}