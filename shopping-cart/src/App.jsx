import './App.css'
import { useEffect,useState } from 'react'
import Card from './Components/Card'

function App() {
  const [products,setProducts] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/electronics')
      .then(res=>res.json())
      .then(json=>setProducts(json))
      .catch(error => console.error(error))
  },[])
  console.log(products)
  
  return (
    <div className='grid-container'>
      {
        products.map((product) => {
          return( 
            <div className="card-container" key={product.id}>
                <img className="product-image" src={product.image}/>
                <h3 className="product-name">{product.title}</h3>
                <h5 className="product-price">{product.price}</h5>
                <div className='product-quantity-container'>
                    <button className="minus-button">-</button>
                    <input type="text" className="product-quantity"/>
                    <button className="plus-button">+</button>
                </div>
                <button className='Add-to-cart'>Add to Cart</button>
            </div>    
        )
        })
      }
    </div>
  )
}

export default App
