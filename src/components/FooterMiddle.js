import React from 'react'

const img1 = 'https://www.techjockey.com/assets/new-assets/images/apple-play-badge-tech.svg'
const img2 = 'https://www.techjockey.com/assets/new-assets/images/google-play-badge-1.svg'
const img3 = 'https://www.techjockey.com/assets/new-assets/images/dmcs_protected.svg'

const social1 = 'https://www.techjockey.com/assets/new-assets/images/Facebook-new.svg'
const social2 = 'https://www.techjockey.com/assets/new-assets/images/instagram-new.svg'
const social3 = 'https://www.techjockey.com/assets/new-assets/images/Twitter-new.svg'
const social4 = 'https://www.techjockey.com/assets/new-assets/images/Linkedin-new.svg'
const social5 = 'https://www.techjockey.com/assets/new-assets/images/Youtube-new.svg'

const FooterMiddle = () => {
    return (
        <div className='footer-middle'>
            <div className="footer-middle-column">
                <div className='footer-middle-heading'>Download Techjockey Partner App</div>
                <div className='footer-middle-content'>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                </div>
            </div>
            <div className="footer-middle-column">
                <div className='footer-middle-heading'>Let's Get Social</div>
                <div className='footer-middle-content'>
                    <img src={social1} alt="" />
                    <img src={social2} alt="" />
                    <img src={social3} alt="" />
                    <img src={social4} alt="" />
                    <img src={social5} alt="" />
                </div>
            </div>
            <div className="footer-middle-column">
                <div className='footer-middle-heading'>Subscribe for Offers</div>
                <div className='footer-middle-content'>
                    <form action="">
                        <div>
                            <input type="text" className='footer-middle-input' />
                        </div>
                        <div>
                            <button className='footer-middle-button'>subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FooterMiddle