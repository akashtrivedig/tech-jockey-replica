import React from 'react'
import { header_categories } from '../staticContent'

const HeaderCategories = () => {
  return (
    <div className='header-navigation'>
      <div className="options-container">
        {
          header_categories.map((category, index) => (
            <DynamicOption category={category} key={index} index={index} />
          ))
        }
      </div>
      <div className="side-options">
        <Option name={'write review'} />
        <Option name={'need help'} />
      </div>
    </div >
  )
}

export default HeaderCategories

const Option = (props) => {
  const { name, to } = props
  return (
    <div className="option">{name}</div>
  )
}

const DynamicOption = (props) => {
  const { category, index } = props
  const [active, setActive] = React.useState(false)
  const key = Object.keys(category)
  function activate() { setActive(true) }
  function deactivate() { setActive(false) }

  return (
    <div className="option" onMouseLeave={deactivate} onMouseOver={activate}>
      <div className="option">
        {key[0]}
        <span>
          {category[key[0]].tree && <img className="category-down-arrow" src='https://cdn-icons-png.flaticon.com/128/57/57055.png' alt='' />}
        </span>
      </div>
      {category[key[0]].tree && active && <OptionsBox options={category[key[0]].tree} index={index} />}
    </div>
  )
}


const OptionsBox = (props) => {
  const { options, index } = props
  const keys = Object.keys(options)
  return (
    <div className="option-box">
      {
        keys.map((option, index) => (
          <Category option={options[option]} name={option} index={index} />
        ))
      }
    </div >
  )
}
const Category = (props) => {
  const { option, name, index } = props
  const [active, setActive] = React.useState(false)
  function activate() { setActive(true) }
  function deactivate() { setActive(false) }

  return (
    <div className="category-container" key={index} onMouseLeave={deactivate}>
      <img src={option.icon} className='sub-category-icon v-center' alt="" />
      <div className="option-name v-center" onMouseOver={activate} >{name}</div>
      {
        option.tree &&
        <img className='category-right-arrow' src="https://t3.ftcdn.net/jpg/02/93/94/42/240_F_293944233_9v9vpVR4eiMO6lYZ5V83zmpLens7MLHL.jpg" alt="" />
      }
      {
        active && option.tree &&
        <OptionsSubBox
          options={option.tree}
          active={active}
        />}
    </div>
  )
}


const OptionsSubBox = (props) => {
  const { options, active } = props
  const keys = Object.keys(options)

  console.log(options);
  if (!active) {
    return null
  }
  return (
    <div className="option-sub-box">
      {
        keys.map((option, index) => (
          <div className="category-container" key={index} >
            <img src={options[option].icon} className='sub-category-icon v-center' alt="" />
            <div className="option-name v-center">{option}</div>
            {
              options[option].tree &&
              <img className='category-right-arrow' src="https://t3.ftcdn.net/jpg/02/93/94/42/240_F_293944233_9v9vpVR4eiMO6lYZ5V83zmpLens7MLHL.jpg" alt="" />
            }
          </div>
        ))
      }
    </div >
  )
}