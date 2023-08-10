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
  
  return (
    <div className='grid-container'>
      {
        products.map((product) => {
          return(<Card {...product} key={product.id}/>)
        })
      }
    </div>
  )
}

export default App
