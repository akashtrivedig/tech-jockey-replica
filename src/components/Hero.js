import React from 'react'

const Hero = () => {
  const inputPlaceholder = 'Search By Category, Product or Keyword'
  return (
    <section className='hero-container'>
      <div className="hero-vertical-div">get instant call</div>
      <div className="hero">
        <h1 className='hero-heading'>Discover & Buy the Best Software on Techjockey</h1>
        <div className="hero-input-container">
          <div className='v-center'>
            <img src="https://as1.ftcdn.net/v2/jpg/01/94/17/50/1000_F_194175090_ALcio7Wve4jRr3uzcBJVCxotBEEGdf5d.jpg" alt="" className='hero-search-icon' />
          </div>
          <input type="text" className="hero-input" placeholder={inputPlaceholder} />
          <button className="hero-button">search</button>
        </div>
        <div className="hero-input-optional">
          or <span className='optional-link'>
            <a href='#'>get instant advice</a>
          </span>
        </div>
        <div className="hero-options-container">
          <div className="hero-option-container">
            <span className='v-center'>
              <img className='header-option-icon' src="https://www.techjockey.com/assets/V2/img/consult.svg" alt="" />
            </span>
            <span className='v-center'>free expert consultation</span>
          </div>
          <div className="hero-option-container">
            <span className='v-center'>
              <img className='header-option-icon' src="https://www.techjockey.com/assets/V2/img/license.svg" alt="" />
            </span>
            <span className='v-center'>get instant license</span>
          </div>
          <div className="hero-option-container">
            <span className='v-center'>
              <img className='header-option-icon' src="https://www.techjockey.com/assets/V2/img/secure.svg" alt="" />
            </span>
            <span className='v-center'>easy & secure checkout</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero