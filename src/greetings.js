import React, { Component } from 'react';

class Greetings extends Component {
  render() {
    let greetings = {
      de: 'Hallo',
      en: 'Hello',
      fr: 'Bonjour',
      es: 'Hola',
      jp: 'Konichiwa',
    };
    return (
      <div className="box">
        {greetings[this.props.lang]} {this.props.children}
      </div>
    );
  }
  greeter() {
    if (this.props.lang === 'fr')
      return <div className="box">Bonjour {this.props.children}</div>;
    if (this.props.lang === 'de')
      return <div className="box">Hallo {this.props.children}</div>;
    if (this.props.lang === 'es')
      return <div className="box">Hola {this.props.children}</div>;
    if (this.props.lang === 'jp')
      return <div className="box">Konichiwa {this.props.children}</div>;
    return <div className="box">Hello {this.props.children}</div>;
  }
}

export default Greetings;