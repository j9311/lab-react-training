import React, { Component } from 'react';

class Greetings extends Component {
  render() {
    let greetings = {
      de: 'Hallo',
      en: 'Hello',
      fr: 'Bonjour',
      es: 'Hola',
    };
    return (
      <div className="contain">
        {greetings[this.props.lang]} {this.props.children}
      </div>
    );
  }
  greeter() {
    if (this.props.lang === 'fr')
      return <div className="contain">Bonjour {this.props.children}</div>;
    if (this.props.lang === 'de')
      return <div className="contain">Hallo {this.props.children}</div>;
    if (this.props.lang === 'es')
      return <div className="contain">Hola {this.props.children}</div>;
    return <div className="contain">Hello {this.props.children}</div>;
  }
}

export default Greetings;
