import React, { Component } from 'react'

class Images extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentIndex: 0
    }
  }

  onPreviewClick = (e, index) => {
    e.preventDefault()
    this.setState({
      currentIndex: index
    })
  }

  render() {
    return(
      <div className="container padding-top">
        <div className="product-gallery">

          <ul className="current">
            <img src={this.props.images[this.state.currentIndex].large_url} alt="" />
          </ul>

          <ul className="product-gallery-thumblist">
            {this.props.images.slice(0,5).map((image, index) => (
              <li key={index} className={index === this.state.currentIndex ? 'active' : ''}>
                <a href="/products" onClick={(e) => this.onPreviewClick(e, index)}>
                  <img src={image.small_url} alt="Product"/>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Images
