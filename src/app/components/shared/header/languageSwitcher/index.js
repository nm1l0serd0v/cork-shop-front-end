import React from 'react'

import Language from './language'

import { findLanguageById } from '../../../../lib/language'

class LanguageSwitcher extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: false
    }
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
      <div onClick={this.toggleHandler.bind(this)} className={`lang-switcher ${this.state.expanded ? 'open' : ''}`}>
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
                languageSelected={this.languageSelectedHandler.bind(this)}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default LanguageSwitcher
