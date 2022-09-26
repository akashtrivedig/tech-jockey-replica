import React from 'react'

const months = {
  '0': 'Jan',
  '1': 'Feb',
  '2': 'March',
  '3': 'jan',
  '4': 'jan',
  '5': 'jan',
  '6': 'jan',
  '7': 'jan',
  '8': 'Aug',
  '9': 'Sep',
  '10': 'Oct',
  '11': 'jan',
  '12': 'jan',
}

const CustomerSucessCard = (props) => {
  const { story } = props
  const month = months[story.date.getMonth().toString()]
  const date = `${story.date.getDate()}, ${month}, ${story.date.getFullYear()}`
  return (
    <div className='customer-success-card'>
      <div>
        <img src={story.thumbnail} className='customer-success-thumbnail' alt="" />
      </div>
      <div className="customer-success-tag-container">
        {story.tags.map((tag, index) => (<Chip content={tag} key={index} />))}
      </div>
      <div className="customer-success-heading">{story.heading}</div>
      <div className="customer-success-date">
        {date}
      </div>
    </div>
  )
}

export default CustomerSucessCard

const Chip = (props) => {
  const { content } = props
  return (
    <div className='success-tag-chip'>{content}</div>
  )
}