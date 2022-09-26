import React from 'react'
import ProductCard from './ProductCard';


const TopProducts = (props) => {
    const { products } = props
    return (
        <div className="top-products-container">
            <h2>Top Trending Products</h2>
            <div className="products-container">
                {
                    products.map((product, index) => (
                        <ProductCard
                            company={product.company}
                            key={index}
                            name={product.name}
                            price={product.price}
                            tags={product.tags}
                            rating={product.rating}
                            thumbnail={product.thumbnail}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default TopProducts