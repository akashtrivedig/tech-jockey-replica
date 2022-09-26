import React from 'react'
import { categories, comparisionProducts } from '../staticContent'
import ProductComparissionCard from './ProductComparissionCard'

const ProductComparisionByCategory = (props) => {
    const { } = props
    const [activeCategory, setActiveCategory] = React.useState(categories[0].code)
    const productsByCategory1 = comparisionProducts.filter((product) => (product.company1.categoryCode == activeCategory))
    console.log(productsByCategory1);
    return (
        <div className="top-products-container">
            <h2>Top Trending Products</h2>
            <div className="category-container">
                {
                    categories.map((category, index) => (
                        <button
                            onClick={() => { setActiveCategory(category.code) }}
                            className="category-button"
                            key={index}
                            style={category.code == activeCategory ? { 'borderBottom': '2px solid blue' } : {}}
                        >{category.name}</button>
                    ))
                }
                <hr />
            </div>
            <div className="products-container">
                {
                    productsByCategory1.map((items, index) => (
                        <ProductComparissionCard items={items} key={index} />
                    ))
                }
            </div>
        </div >
    )
}

export default ProductComparisionByCategory