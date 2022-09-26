import React from 'react'
import { footer_about, footer_business, footer_popular_categories, footer_tools } from '../staticContent'

const FooterTop = () => {
    return (
        <div className='footer-top'>
            <div className="footer-top-col1-container">
                <h3 className='footer-column-heading'>Popular Categories</h3>
                <div className="footer-top-col1">
                    {
                        footer_popular_categories.map((category, index) => (
                            <div className='column-link' key={index}>
                                <a href={category.to}>{category.name}</a>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="footer-middle-content-hdivider"></div>
            <div className="footer-top-col2-container">
                <div>
                    <h3 className='footer-column-heading'>About Techjokey</h3>
                    <div className="footer-top-col2">
                        {
                            footer_about.map((category, index) => (
                                <div className='column-link' key={index}>
                                    <a href={category.to}>{category.name}</a>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h3 className='footer-column-heading'>Popular Categories</h3>
                    <div className="footer-top-col2">
                        {
                            footer_business.map((category, index) => (
                                <div className='column-link' key={index}>
                                    <a href={category.to}>{category.name}</a>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h3 className='footer-column-heading'>Popular Categories</h3>
                    <div className="footer-top-col2">
                        {
                            footer_tools.map((category, index) => (
                                <div className='column-link' key={index}>
                                    <a href={category.to}>{category.name}</a>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default FooterTop