import React, { useState } from 'react'

const StarRatting = () => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

    const handleClick = (index) => {
        const clickedStar = index + 1
        if(clickedStar === rating){
            setRating(rating - 1)
        }else{
                setRating(index + 1)

        }
  }

  const handleMouseEnter = (index) => {
    setHover(index + 1)
  }

  const handleMouseLeave = () => {
    setHover(0)
  }
  return (
    <div>
        <h1>Star Ratting</h1>
        <div className='star-container'>
            <div>
           {[1, 2, 3, 4, 5].map((val, index) => (
          <span
            key={index}
            className='star'
            style={{
                fontSize: '60px',
              color: index < (hover || rating) ? 'yellow' : 'black',
              cursor: 'pointer',
             
            }}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            ★
          </span>
        ))}
        </div>
        <div>
            <h3>Ratting: {rating}</h3>
        </div>
        </div>
    </div>
  )
}

export default StarRatting