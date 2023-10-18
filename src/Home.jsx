import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import CardProduct from './components/CardProduct';


const Home = () => {

    // variable para almacenar los productos
    const [products, setProducts] = useState([
        { id: 1, image: 'https://picsum.photos/id/100/400/270', title: 'Product 1', price: 10 },
        { id: 2, image: 'https://picsum.photos/id/200/400/270', title: 'Product 2', price: 20 },
        { id: 3, image: 'https://picsum.photos/id/300/400/270', title: 'Product 3', price: 30 },
        { id: 4, image: 'https://picsum.photos/id/400/400/270', title: 'Product 4', price: 40 },
        { id: 5, image: 'https://picsum.photos/id/500/400/270', title: 'Product 5', price: 50 },
        { id: 6, image: 'https://picsum.photos/id/600/400/270', title: 'Product 6', price: 60 },
        { id: 7, image: 'https://picsum.photos/id/700/400/270', title: 'Product 7', price: 70 },
        { id: 8, image: 'https://picsum.photos/id/800/400/270', title: 'Product 8', price: 80 },
    ]);

    const [cart, setCart] = useState([6, 2, 9, 7, 6, 1, 3])

    const addToCart = (id) => {
        //console.log(id)
        const newCart = [...cart];
        newCart.push(id)
        setCart(newCart)
    }

    const removeFromCart = (id) => {
        //id == 1
        const cartFiltered = cart.filter((item) => item !== id); //[6, 2, 9, 7, 6, 3] 
        setCart(cartFiltered)
    }

    return (
        <>
            {/*<!-- Navigation-->*/}
            <Navbar logo={"Start Bootstrap"} cart={cart} />
            {/* <!-- Header--> */}
            <Header />
            {/* <!-- Section--> */}
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {
                            products.length > 0 ?
                                products.map((product) => {
                                    return (
                                        <div className="col mb-5" key={product.id}>
                                            {/* <CardProduct /> */}
                                            {/* <CardProduct
                                                image={product.image}
                                                title={product.title}
                                                price={product.price}
                                            /> */}
                                            <CardProduct {...product} addToCart={addToCart} removeFromCart={removeFromCart} />
                                        </div>
                                    )
                                })
                                : (
                                    <div className="col-12 mb-5">
                                        <h6 className='text-center'>Sin productos a listar</h6>
                                    </div>
                                )
                        }

                        {/* <div className="col mb-5">
                            <CardProduct 
                                image={"https://picsum.photos/400/270"} 
                                title={"Pasajes Ida y Vuelta Valparaiso"} 
                                price={26000} 
                            />
                        </div>
                        <div className="col mb-5">
                            <CardProduct />
                        </div>
                        <div className="col mb-5">
                            <CardProduct />
                        </div>
                        <div className="col mb-5">
                            <CardProduct />
                        </div>
                        <div className="col mb-5">
                            <CardProduct />
                        </div>
                        <div className="col mb-5">
                            <CardProduct />
                        </div>
                        <div className="col mb-5">
                            <CardProduct />
                        </div>
                        <div className="col mb-5">
                            <CardProduct />
                        </div> */}
                    </div>
                </div>
            </section>
            {/* <!-- Footer--> */}
            <Footer />
        </>
    )
}

export default Home;