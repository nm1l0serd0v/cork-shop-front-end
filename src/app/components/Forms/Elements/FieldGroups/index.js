import React from 'react'
import PropTypes from 'prop-types'

import Input from '../Input'
import Select from '../Select'

import eachSlice from '../../../../lib/eachSlice.js'

const renderInput = (input) => (
  input.type === 'select' 
    ? <Select {...input} id={input.name} />
    : <Input {...input} id={input.name} />
)

const fieldGroups = (props) => {
  return props.fields.map((fieldsScope, i) => {
    return eachSlice([...fieldsScope], 2).map((batch, i) => {

      return(
        <div className="row" key={i}>
          { batch.map((input, i) => ( 
            <div key={i} className={batch.length === 1 ? 'col-sm-12' : 'col-sm-6' /* fill or not */ }> 
              <div className="form-element"> {renderInput(input)} </div>
            </div>
          )) }
        </div>
      )
    })
  })
}

fieldGroups.propTypes = {
  fields: PropTypes.array.isRequired
}

export default fieldGroups

//    Usage example:
// 
//    inputs: [ 
//      [
//        "Input 1",
//        "Input 2",
//      ],
//      [
//        "Input 3"
//      ]
//    ]
//
//    will build grid like this:
//    ___________________
//    |        |        |
//    | input1 | input 2|
//    |-----------------|
//    |      input 3    |
//    |_________________|
//

