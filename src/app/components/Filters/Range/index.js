import React from 'react'
// import PropTypes from 'prop-types'

// import noUiSlider from 'nouislider'

// import './range.scss'

class Range extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      defaultFrom: 150,
      defaultTo: 650,
      currentFrom: 150,
      currentTo: 650,
      mouseXPosition: 0
    }
  }

  componentDidMount() {
    // let range = document.querySelector('.ui-range-slider');

    // noUiSlider.create(range, {
    //   start: [this.state.defaultFrom, this.state.defaultTo],
    //   connect: true,
    //   step: 1,
    //   range: [
    //     'min': 1,
    //     'max': 10000
    //   ]
    // })
  }

  render() {
    return(
      <div className="widget widget-catesgories">
        <h3 className="widget-title">Price Range</h3>
        <form method="post" className="price-range-slider" data-start-min="250" data-start-max="650" data-min="0" data-max="1000" data-step="1">
          <div className="ui-range-slider"></div>
          <footer className="ui-range-slider-footer">
            <div className="column">
              <button type="submit" className="btn btn-ghost btn-sm btn-default">Filter</button>
            </div>
            <div className="column">
              <div className="ui-range-values">
                <div className="ui-range-value-min">
                  $<span></span>
                  <input type="hidden" />
                </div> -
                <div className="ui-range-value-max">
                  $<span></span>
                  <input type="hidden" />
                </div>
              </div>
            </div>
          </footer>
        </form>
      </div>
    )
  }
}

export default Range
