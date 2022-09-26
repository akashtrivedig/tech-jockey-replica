import React from 'react'
import { faq_bottom, faq_top } from '../staticContent'

const Faq = () => {
    return (
        <div className='faq-container'>
            <div className="faq-top">
                <div className="faq-top-heading-container">
                    <h2 className='faq-heading'>There is something for everyone!</h2>
                    <a href='/' className='link'>see more</a>
                </div>
                <div className="faq-top-list-conatiner">
                    {
                        faq_top.map((faq, index) => (
                            <div className="faq" key={index}>
                                <div className='v-center'>
                                    <img className='faq-icon' src="https://www.techjockey.com/assets/V2/img/faqs.png" alt="" />
                                </div>
                                <div className='v-center'>
                                    <h3 className='faq-heading'>{faq.heading}</h3>
                                    <div className="faq-content">{faq.content}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="faq-bottom">
                {
                    faq_bottom.map((faq, index) => (
                        <div className="info-container" key={index}>
                            <img src={faq.image} alt="" />
                            <div className='v-center'>
                                <div>{faq.content}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Faq