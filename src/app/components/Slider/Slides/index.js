import React from 'react'

import Slide from './Slide'

const slides = (props) => {
  const containerStyles = {
    transform: `translateX(${props.translateValue}px)`,
    transition: 'transform ease-out 0.45s',
    width: (props.slidesWidth * props.slides.length),
    'overflowX': 'hidden',
    position: 'relative'
  }

  return(
    <div className="inner" style={containerStyles}>
      {props.slides.map((slide, i) => (
        <Slide key={i} width={props.slidesWidth} imagePath={slide.imagePath}>
          <slide.ComponentWithContent />
        </Slide>
      ))}
    </div>
  )
};

export default slides

