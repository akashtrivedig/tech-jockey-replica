import React from 'react'
import ProductComparissionCard from './ProductComparissionCard'

const TrendingProductComparision = (props) => {
    const { products } = props
    return (
        <div className="top-products-container">
            <h2>Top Trending Products</h2>
            <div className="products-container">
                {
                    products.map((product, index) => (
                        <ProductComparissionCard key={index} items={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default TrendingProductComparision