
import './App.css'
import ToDo from './todo';
import Flowers from './flowers';
import Products from './products';
import Library from './library';

/** React  এ JSX এ style add করার ৩টা common নিয়ম
 * (External CSS) থেকে Style : CSS file এ style লিখো & JSX এ className ব্যবহার করো
 * একটা JavaScript object বানিয়ে সেটাকে Object Variable থেকে Style  হিসেবে use করা যায়।
 * JSX এর ভিতরেই সরাসরি object লিখে inline style দেওয়া।
 * 
*/ 
function App() {
  let time = 80;
  const flowers = ['Rosemary', 'rose', 'sunflower', 'lilly', 'tulip'];
  const products = [
    { id: 1, name: "Mobile", price: 30000 },
    { id: 2, name: "Laptop", price: 70000 },
    { id: 3, name: "Tablet", price: 8000 },
  ];

  const books = [
    {id: 1, name:"Physics", price: 300},
    {id: 2, name:"Bioligy", price: 300},
    {id: 3, name:"Chemistry", price: 300},
    {id: 4, name:"Math", price: 300},
  ]

  return (
    <>
      <section id="center">
   
        <div>
          <h1>React Core Concept</h1>
        </div>

        <Library books={books}></Library>

        {
          products.map(product => <Products key={product.id} product={product}></Products>)
        }

         {/* {
      flowers.map(flower => <Flowers flowerName={flower}></Flowers>)
      } */}

        
      </section>

     
      {/* <ToDo
        task="Learn React"
        isDone={true}
        time={time}></ToDo>
      <ToDo
        task="Revise JavaScript"
        isDone={false}></ToDo>
      <ToDo
        task="Prayer Time"
        isDone={true}
        time="30 minutes"></ToDo>
      <ToDo
        task="Revise CSS "
        isDone={true}></ToDo> */}
      
      {/* <Person name="Sultana" prof="Web Developer"></Person>
      <Person name="Ety" prof="Student"></Person>
      <Student></Student>

      <Product name="laptop" price="30000"></Product>
      <Product name="Tablet" price="8000"></Product>

      <Friends> </Friends>
      <FullName fName="Sokhina" lName="Begum"></FullName>
      <FullName fName="Kamruzzaman" ></FullName>
      <Div></Div>
      <Friends> </Friends> */}
     
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