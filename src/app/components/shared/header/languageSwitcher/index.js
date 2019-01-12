import React from 'react'
import { connect } from 'react-redux'

import Language from './language'

import { setLanguage } from '../../../../store/actions'

import { findLanguageById } from '../../../../lib/language'

class LanguageSwitcher extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: false
    }

    this.toggleHandler = this.toggleHandler.bind(this)
    this.languageSelectedHandler = this.languageSelectedHandler.bind(this)
  }

  toggleHandler() {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  languageSelectedHandler(event, id) {
    event.preventDefault()

    this.props.onLanguageSeted(id)
  }

  render() {
    const currentLanguage = findLanguageById(this.props.current, this.props.languages)

    return(
      <div onClick={this.toggleHandler} className={`lang-switcher ${this.state.expanded ? 'open' : ''}`}>
        <div className="lang-toggle">

          <img src={currentLanguage.path} alt={currentLanguage.alt} />
          <i className="material-icons arrow_drop_down"></i>

          <ul className="lang-dropdown">
            {this.props.languages.map((language, i) => (
              <Language key={i}
                id={language.id}
                name={language.name}
                alt={language.alt}
                path={language.path}
                languageSelected={this.languageSelectedHandler}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    languages: state.languages,
    current: state.current
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLanguageSeted: (id) => { dispatch(setLanguage(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSwitcher)
