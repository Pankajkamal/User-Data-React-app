import React, { Component } from 'react';



class Userlist extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }

      componentDidMount() {
        fetch("https://reqres.in/api/user?page=1")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.data
              });
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
      }

    render() {

        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <div>
            
            <div className="App">
            <table className='Userlist'>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>year</th>
                <th>color</th>
                <th>pantone value</th>
              </tr>
              {/* <ul>
              {items.map(item => (
                <li key={item.id}>
                  {item.name}
                   {item.year}
                   {item.color}
                   {item.pantone_value}
                   
                </li>
              ))}
            </ul> */}
            {items.map(item => (
              <tr>
                <td>{item.id}</td>
                <td> {item.name}</td>
                <td>{item.year}</td>
                <td>{item.color}</td>
                <td>{item.pantone_value}</td>
              </tr>
             ))}
             
            </table>
          </div>
            </div>
            
          );
        }
      }
    
}

export default Userlist;