import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './image/logo-1.png'
// import  Header from './header';
import List from './List';

class App extends Component {

  
  constructor(props) {
    super(props);
    
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };  
    //this.componentDidMount = this.componentDidMount.bind(this);  
  }
  // handleClick() {
  //   alert('Click happened');
  // }


  componentDidMountEvent= componentDidMount=> {   
    //this.setState({error : "Somme Error"})
    
    fetch("https://reqres.in/api/user?page=1")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.data
          });
          //alert(JSON.stringify(result.data));
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    
      
  };


  render() {
    

    return (
      <div className="App">
        
          {/* <Header/> */}
          <div className="App-header">   
          <ul>
                <li>
                    <a href=''>Home</a>
                </li>
                <li>
                    <a href=''>About</a>
                </li>
                <li>
                <button onClick={this.componentDidMountEvent} class="btn btn-dark btn-sm">Get User Data</button>
                </li>
               
            </ul>
              
            </div>
            <div>
            <img src={logo} alt="logo" width={100} height={100} class="logo-img"/>
            </div>

        
          <h2 Class="welcome">Welcome to React- V3</h2>
          <p>{this.state.error }</p>
         
          <List state={this.state} data={this.state.items[0]} ></List>
          
            

       
       
      </div>
    );

    
  }
}

export default App;
