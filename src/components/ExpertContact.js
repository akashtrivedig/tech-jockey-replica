import React from 'react'

const ExpertContact = () => {
  return (
    <div className='expert-contact'>
      <div>
        <img src="https://www.techjockey.com/assets/images/call_expert_img.png" className='expert-contact-thumbnail' alt="" />
      </div>
      <div className="expert-contact-content v-center">
        <div className="top-content">
          we love taking your call!
        </div>
        <div className="bottom-content">
          Get Advice from Our Software Experts
        </div>
      </div>
      <div className='v-center'>
        <button className="expert-contact-button">
          get expert call
        </button>
      </div>
    </div>
  )
}

export default ExpertContact