import './styles/Card.css'

const Card = (props) => {
    // eslint-disable-next-line react/prop-types
    const{title,image,price} = props

    return( 
        <div className="card-container">
            <img className="product-image" src={image}/>
            <p className="product-name">{title}</p>
            <h5 className="product-price">{price} €</h5>
            <div className='product-quantity-container'>
                <button className="minus-button">-</button>
                <input type="text" className="product-quantity"/>
                <button className="plus-button">+</button>
            </div>
            <button className='Add-to-cart'>Add to Cart</button>
        </div>    
    )
}

export default Card