import React, { Component } from 'react';
import './App.css';
import Strongman from './Strongman';

class App extends Component {

  state = {
    strongmen: [],
    isLoaded: false,
  }

  componentDidMount() {
    // setTimeout(this.fetchData, 1500)
    fetch('data/strongmen.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          strongmen: data.strongmen,
          isLoaded: true
        })
      })
  }

  // fetchData = () => {
  //   fetch('data/strongmen.json')
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({
  //         strongmen: data.strongmen,
  //         isLoaded: true
  //       })
  //     })
  // }

  render() {
    console.log("render");
    const strongmen = this.state.strongmen.map(strongman => (
      <Strongman key={strongman.id} name={strongman.name} surname={strongman.surname} />
    ))
    return (
      <ul>
        {this.state.isLoaded ? strongmen : "Wczytuję dane"}
      </ul>
    );
  }
}

export default App;

