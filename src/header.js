import React, { Component } from 'react';



class Header extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        
      }
    //   handleClick() {
    //     alert('Click happened');
    //   }

    render() {
      return (       
        <div className="App-header">   
            <ul>
                <li>
                    <a href=''>Home</a>
                </li>
                <li>
                    <a href=''>About</a>
                </li>
                <li>
                <button onClick={this.handleClick}>Click Me</button>
                </li>
            </ul>
        </div>  
        
        
      );
    }
  }
  
  export default Header;
  