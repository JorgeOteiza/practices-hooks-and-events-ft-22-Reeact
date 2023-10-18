import React from 'react'
import PropTypes from 'prop-types'

const CardProduct = ({ id, image, title, price, addToCart, removeFromCart }) => {
    return (
        <div className="card h-100">
            {/* <!-- Sale badge--> */}
            <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>
            {/* <!-- Product image--> */}
            <img className="card-img-top" src={image} alt="..." />
            {/* <!-- Product details--> */}
            <div className="card-body p-4">
                <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">{title}</h5>
                    {/* <!-- Product reviews--> */}
                    <div className="d-flex justify-content-center small text-warning mb-2">
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                    </div>
                    {/* <!-- Product price--> */}
                    <span className="text-muted text-decoration-line-through">${price}</span>
                    ${price}
                </div>
            </div>
            {/* <!-- Product actions--> */}
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                    {/* <button className="btn btn-outline-dark mt-auto" onClick={addToCart}>Add to cart</button> */}
                    {/* <button className="btn btn-outline-dark mt-auto" onClick={() => addToCart()}>Add to cart</button> */}
                    <button className="btn btn-outline-dark mt-auto" onClick={() => addToCart(id)}>Add to cart</button>
                    <button className="btn btn-outline-dark mt-auto" onClick={() => removeFromCart(id)}>Remove from cart</button>
                </div>
            </div>
        </div>
    )
}

// Props por defecto
CardProduct.defaultProps = {
    id: 1,
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    title: "Product Title",
    price: 0.00,
    addToCart: (id) => console.log(`Añadiendo el producto ${id}`)
}

// Validando tipo de datos de los props
CardProduct.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    addToCart: PropTypes.func 
}

export default CardProduct;