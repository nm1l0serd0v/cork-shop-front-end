import React, { Component } from 'react'
import { connect } from 'react-redux'

import Option from './Option'
import Range from './Range'
import Sort from './Sort'
import Colors from './Colors'

class Filters extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.loadTaxons()
    this.props.loadTags()
    this.props.loadColors()
  }

  render() {
    let { tags, taxons, colors } = this.props

    console.log(colors)
    return(
      <div className="col-md-3 col-sm-4">
        <aside className="sidebar">
          <span className="sidebar-close"><i className="material-icons close"></i></span>
          <div className="widgets">
            <Option title="Categories" name="category" isList options={taxons.map(taxon => (taxon.name))}/>
            <Sort />
            <Range />
            <Colors />
            <Option title="Popular tags" name="tags" options={tags.map(tag => (tag.name))}/>
          </div>
        </aside>
      </div>
    )
  }
}

export default Filters
