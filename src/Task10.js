import React from "react";
class Task10 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        names: ['Коля', 'Вася', 'Петро']
      };
    }
  
    render() {
      const listItems = this.state.names.map((name, index) =>
        <li key={index}>{name} - {index + 1}</li>
      );
      return (
        <ul>
          {listItems}
        </ul>
      );
    }
  }
export default Task10;  