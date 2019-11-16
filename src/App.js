
  
import React, { Component } from 'react';
import Item from './components/Item';

import _ from 'lodash';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      n: "sdddssd",
      data : [
        {         
          name  : "Do the proyects ",
          
        }
      ]
    }
  }


  myChangeHandler = (event) => {
if (event.target.value==="")
alert("empty fields");
else{
  let { data } = this.state;
  let newData = [
    ...data,
    {        
      name  : event.target.value,
      
    }
  ]
  this.setState({ data : newData });

 
}
   
  }

  _remove(position){
    let { data } = this.state;

    let newData = [
      ...data.slice(0, position),
      ...data.slice(position + 1),
    ]

    this.setState({ data : newData });

  }


 
 

  render() {
    return (
      <div className="app">
        <h1>List of Task</h1>

        <form>
    
      
      <input
        type='text' className="input"
        placeholder="Type your task-- > double click to save" onDoubleClick={this.myChangeHandler}
      />
      </form>
        <ul className="todo-list">
          {this.state.data.map(
            (item,index) =>
              <Item data={item} key={index} onRemove={ () => this._remove(index)} />
            )
          }
        </ul>
        <div className="footer">
         
       

         
        </div>
      </div>
    );
  }
}

export default App;

