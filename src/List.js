import React from "react";
import './App.css';
const List = ({state,data})=>
{   
        // const item= state.items;
        const { error, isLoaded, items } = state;
       
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div class="no-data">No Data...</div>;
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
    
export default List;


