import React from 'react'
import PropTypes from 'prop-types'

import { TransitionGroup } from 'react-transition-group'

import Tab from './Tab'
import Content from './Content'

class Tabs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentIndex: 0,
      headers: props.headers,
      contents: props.contents
    }

    this.onClickHandler = this.onClickHandler.bind(this)
  }

  onClickHandler(index) {
    this.setState({
      currentIndex: index
    })
  }

  render(){
    const classNames = [
      "nav-tabs",
      this.props.centerAligin ? 'text-center' : 'mobile-center'
    ].join(' ')

    return(
      <div className="col-sm-12">
        <ul className={classNames} role="tablist">
          {this.state.headers.map((tab, i) => (
            <Tab 
              key={i}
              index={i}
              clicked={this.onClickHandler}
              active={i === this.state.currentIndex} 
              {...tab}
            />
          ))}
        </ul>

        <div className="tab-content">
          <TransitionGroup>
            {this.state.contents.map((content, i) => {
              return(
                <Content key={i} active={this.state.currentIndex === i}>
                  { this.state.contents[i] }
                </Content>
              )
            })}
          </TransitionGroup>
        </div>
      </div>
    )
  }
}

Tabs.defaultProps = {
  contents: []
}

Tabs.propTypes = {
  headers: PropTypes.array.isRequired,
  contents: PropTypes.array
}

export default Tabs
