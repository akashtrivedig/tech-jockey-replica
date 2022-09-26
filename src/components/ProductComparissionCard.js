import React from 'react'

const ProductComparissionCard = (props) => {
    const { items } = props
    return (
        <div className='product-comparision-card v-flex'>
            <div className="top flex1">
                <div className='block-company'>
                    <img src={items.company1.thumbnail} alt="" className="comparision-thumbnail" />
                    <h5 className='name'>{items.company1.name}</h5>
                    <p className='company'>{items.company1.company}</p>
                </div>
                <div className="footer-middle-content-hdivider "></div>
                <div className='block-company'>
                    <img src={items.company1.thumbnail} alt="" className="comparision-thumbnail" />
                    <h5 className='name'>{items.company1.name}</h5>
                    <p className='company'>{items.company1.company}</p>
                </div>
            </div>
            <div>
                <button className='card-button'>Compare</button>
            </div>
        </div>
    )
}

export default ProductComparissionCard