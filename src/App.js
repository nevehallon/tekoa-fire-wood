import React, { Component } from 'react';
import WorkPortfolio from './WorkPortfolio'
import FindMe from './FindMe'
import AboutNaveh from './AboutNaveh'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        'con1': true,
        'con2': false,
        'con3': false
    };
  }

  handleClick1() {

    this.setState({
      'con1': true,
      'con2': false,
      'con3': false
    });
}

handleClick2() {

  this.setState({
    'con1': false,
    'con2': true,
    'con3': false
  });
}

handleClick3() {

  this.setState({
    'con1': false,
    'con2': false,
    'con3': true
  });
}

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
        <div className="App-logo" alt="logo" />
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title"></h1>
        </header>
        <p className="App-intro">
          
        </p>
        <div id="top-nav">
          <nav className="main-nav">
            <ul>
              <li id="item1" className="index-collection">
                <button onClick={(e) => this.handleClick1(e)} className="active-link" className={this.state.con1 ? "active-link" : "b"}>Work Portfolio</button>
              </li>
              <li id="item2" className="index-collection">
                <button onClick={(e) => this.handleClick2(e)} className={this.state.con2 ? "active-link" : "b"}>Find Me</button>
              </li>
              <li id="item3" className="page-collection">
                <button onClick={(e) => this.handleClick3(e)} className={this.state.con3 ? "active-link" : "b"}>About Neveh</button>
              </li>
            </ul>
          </nav>

          <section id="page" role="main" data-content-field="main-content"> 
            <div className={this.state.con1 ? 'ON' : 'OFF'}>
              <WorkPortfolio className="work-collection"/>
            </div>
            <div className={this.state.con2 ? 'ON' : 'OFF'}>
              <FindMe/> 
            </div>
            <div className={this.state.con3 ? 'ON' : 'OFF'}>
              <AboutNaveh/> 
            </div> 
          </section>
        </div>
      </div>
    );
  }
}

export default App;
