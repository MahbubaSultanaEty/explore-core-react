import './App.css'
export default function Products({ product }) {
    return (

        <div className='products'>
          <p> Name: {product.name}</p> 
            Price: {product.price}
        </div>
    )    
}