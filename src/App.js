import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';
import Particles from 'react-particles-js';
import 'tachyons';

const particleOptions = {
  particles: {
    number: {
    value: 100, 
    density: {
      enable: true,
      value_area: 800
      }
    }
  } 
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };
  } 

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles' params={particleOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange}/>
        {/*
        <FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
