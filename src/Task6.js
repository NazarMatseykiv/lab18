import React from "react";
class Task6 extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name: 'Іван', age: 25 };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState({ name: 'Іван', age: 25 });
    }
  
    render() {
      return (
        <div>
          <p>ім'я: {this.state.name}, вік: {this.state.age}</p>
          <button onClick={this.handleClick}>Натисни на мене</button>
        </div>
      );
    }
  }
export default Task6;  