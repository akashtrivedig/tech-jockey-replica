import React from 'react'

const ProductCard = (props) => {
    const { tags, thumbnail, rating, price, name, company } = props
    const priceHolder = price ? `${price}` : 'Price On Request'
    console.log(tags);
    return (
        <div className='product-card'>
            <div className="top">
                <div>
                    <img className="thumbnail" src={thumbnail} alt="" />
                </div>
                <div className="description-container">
                    <div className="name">{name}</div>
                    <div className="company">{company}</div>
                </div>
            </div>
            <div className="rating-container">
                <div className="rating">
                    <span><img className='star-icon' src="https://www.techjockey.com/assets//V2/img/star1-bx.png" alt="" /></span>
                    <span className='v-center'>
                        {rating}
                    </span>
                </div>
                {
                    tags.map(tag => (<div className="tag">{tag}</div>))
                }
            </div>
            <button className='card-button'>get free demo</button>
            <hr className='divider' />
            <div className="bottom">
                {
                    price ? (
                        <div className="price-container v-center">
                            <div className=''>
                                <div>&#x20b9; {priceHolder}</div>
                                <div className='price-tax'>Inclusive all Taxes</div>
                            </div>
                            <div>
                                <button className='filled-button'>buy now</button>
                            </div>
                        </div>

                    ) : (
                        <div className="price-container v-center">
                            <div className='v-center'>price on request</div>
                            <button className='filled-button'>get price</button>
                        </div>
                    )
                }
            </div>
        </div >
    )
}

export default ProductCard