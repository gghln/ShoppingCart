import { FiShoppingCart } from 'react-icons/fi';
import './styles/NavigationBar.css'
function NavigationBar (){
    return(
        <nav>
            <ul>
                <li>Home</li>
            </ul>
            <div className='shopping-cart-container'>
                <button className='shopping-cart-button'>
                    <FiShoppingCart size={20}/>
                    <div className='shopping-cart-counter'>(1)</div>
                </button>
            </div>
            
        </nav>
    )
}

export default NavigationBar