import React from 'react'

const buildStars = (rating, stars=[], i=0) => {
	if (rating === 1) {
    stars.push(<i className="material-icons star_half" key={i}/>)
  } else if (rating > 0) {
    stars.push(<i className="material-icons star" key={i}/>)
  } else if (rating <= -1) {
    stars.push(<i className="material-icons star_border" key={i}/>)
  }

	return stars.length === 5 ? stars : buildStars(rating - 2, stars, i+1)
}

const rating = (props) => {
  return(
    <span className="item-rating text-warning">
      {buildStars(props.rating)}
    </span>
  )
}

export default rating
