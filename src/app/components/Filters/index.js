import React from 'react'

import Option from './Option'
import Range from './Range'

const filters = (props) => {
  return(
    <div className="col-md-3 col-sm-4">
      <aside className="sidebar">
        <span className="sidebar-close"><i className="material-icons close"></i></span>
        <div className="widgets">

          <Option title="Categories" name="category" isList options={[
            'All 135',
            'Furniture 42',
            'Accessories 56',
            'Lightning 28',
            'Clocks 10'
          ]}/>

          <Option title="Sort by" name="sorting" isList options={[
            ([<i className="material-icons sort" />, <span>Default</span>]),
            ([<i className="material-icons favorite_border"/>, <span>Popularity</span>]),
            ([<i className="material-icons vertical_align_top"/>, <span>Last entries</span>]),
            ([<i className="material-icons star_border"/>, <span>Avarage rating</span>]),
            ([<i className="material-icons sort_by_alpha" />, <span>Alphabetically</span>])
          ]}/>

          <Option title="Price filter" name="color" isList options={[
            '$0 - $100',
            '$100 - $200',
            '$200 - $500',
            '$500 - $1000',
            '$1000 - $10000'
          ]}/>

          <Range />

          <Option title="Color filter" name="color" isList options={[
            [<span className="color" style={{'backgroundColor': '#93c4ef'}}></span>, <span>Blue</span>],
            [<span className="color" style={{'backgroundColor': '#a7c04d'}}></span>, <span>Green</span>],
            [<span className="color" style={{'backgroundColor': '#ef0568'}}></span>, <span>Red</span>],
            [<span className="color" style={{'backgroundColor': '#ffce2b'}}></span>, <span>Yellow</span>],
          ]}/>

          <Option title="Popular tags" name="tags" options={[
            'Interior',
            'Electro',
            'Bags',
            'Cuttlery',
            'Downloadable',
            'Digital goods',
            'HiFi'
          ]}/>
        </div>
      </aside>
    </div>
  )
}

export default filters
