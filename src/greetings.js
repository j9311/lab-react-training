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
        {greetings[this.props.lang]} {this.props.name}
      </div>
    );
  }
  greeter() {
    if (this.props.lang === 'fr')
      return <div className="box">Bonjour {this.props.name}</div>;
    if (this.props.lang === 'de')
      return <div className="box">Hallo {this.props.name}</div>;
    if (this.props.lang === 'es')
      return <div className="box">Hola {this.props.name}</div>;
    if (this.props.lang === 'jp')
      return <div className="box">Konichiwa {this.props.name}</div>;
    return <div className="box">Hello {this.props.name}</div>;
  }
}

export default Greetings;
