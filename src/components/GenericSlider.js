import React from 'react'


const GenericSlider = (props) => {
  const { data, count, renderComponent } = props
  const [head, setHead] = React.useState(0)
  const gridTemplate = {
    display: 'grid',
    gridTemplateColumns: `repeat(${5},auto)`,
    height: '16em',
    columnGap: '1em',
    overflow: 'hidden',
  }
  const keys = Object.keys(data)

  let thumbnails = []
  for (let i = head; i < (head + count); i++) {
    thumbnails.push(keys[i])
  }

  function moveSliderLeft() {
    if ((count + head) < keys.length)
      setHead(old => (old + 5))
  }

  function moveSliderRight() {
    if ((head - count) >= 0)
      setHead(old => (old - 5))
  }

  return (
    <div className='slider-container'>
      <div className="slider-left-arrow-container v-center" onClick={moveSliderRight}>
        <img src="https://t3.ftcdn.net/jpg/03/08/33/44/240_F_308334444_a03jdKtCxp1RbqvMQsz6zdaCNTTxhaK7.jpg" className='slider-button' alt="" />
      </div>
      <div className="industry-slider" style={gridTemplate}>
        {
          thumbnails.map(
            industry => (
              <renderComponent industryName={industry} industryValue={data[industry]} />)
          )
        }
      </div >
      <div className="slider-left-arrow-container v-center" onClick={moveSliderLeft}>
        <img src="https://t3.ftcdn.net/jpg/02/93/94/42/240_F_293944233_9v9vpVR4eiMO6lYZ5V83zmpLens7MLHL.jpg" className='slider-button' alt="" />
      </div>
    </div>
  )
}

export default GenericSlider

