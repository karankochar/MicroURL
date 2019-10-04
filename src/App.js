import React, {Component} from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import './Components/Jumbotron'
import Jumbotron from './Components/Jumbotron';
import Button from './Components/Button';



class App extends Component {
  
  render(){

  return (
    <div className="App">
      <Navbar/>
      <Jumbotron/>
      <Button/>
      
    </div>
  );
  }
}

export default App;
