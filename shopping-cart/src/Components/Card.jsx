import './styles/Card.css'

const Card = () => {
    const{id,title,image,price} = props
    console.log(id,title,image,price)
    return( 
        <div className="card-container" key={id}>
            <img className="product-image" src={image}/>
            <h3 className="product-name">{title}</h3>
            <h5 className="product-price">{price}</h5>
            <div className='product-quantity-container'>
                <button className="minus-button">-</button>
                <input type="text" className="product-quantity" value="1"/>
                <button className="plus-button">+</button>
            </div>
            <button className='Add-to-cart'>Add to Cart</button>
        </div>    
    )
}

export default Card