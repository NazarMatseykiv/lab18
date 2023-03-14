import React from "react";
class Task9 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        names: ['Коля', 'Вася', 'Петро']
      };
    }
  
    render() {
      return (
        <ul>
          {this.state.names.map(name => <li key={name}>{name}</li>)}
        </ul>
      );
    }
  }
export default Task9;  