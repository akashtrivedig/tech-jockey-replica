import React from 'react'

const Header = (props) => {
    return (
        <header className='website-header'>
            <div className="app-thumbnail-container">
                <img src="https://www.techjockey.com/assets/V2/img/logo.svg" alt="" />
            </div>
            <div className="header-options">
                <div className="option-container">
                    <span className='v-center'>
                        <img className='header-option-icon ' src="https://www.techjockey.com/assets/V2/img/call_icon_active.svg" alt="" />
                    </span>
                    <span className='v-center'>get free advice</span>
                </div>
                <div className="option-container1">
                    <span className='v-center'>
                        <img src="https://t3.ftcdn.net/jpg/04/45/68/76/240_F_445687627_4QMmFxSHvcDr3FrNgj58UOtZoeyPj324.jpg" className='header-option-icon ' alt="" />
                    </span>
                    <span className='v-center'>become a seller</span>
                </div>
                <div className="option-container2">
                    <span className='v-center'>
                        <img src="https://t3.ftcdn.net/jpg/01/09/45/80/240_F_109458015_QsWmchlzuwCZPqIUWR7HcTDsbbptejRv.jpg" className='header-option-icon ' alt="" />
                    </span>
                    <span className='v-center'>
                        <img src="https://t4.ftcdn.net/jpg/02/29/75/83/240_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" className='header-option-icon ' alt="" />
                    </span>
                </div>
            </div>
        </header >
    )
}

export default Header