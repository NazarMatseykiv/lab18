import React from "react";
class Task4 extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name: 'Іван', age: 25 };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState({ name: 'Коля', age: 30 });
    }
  
    render() {
      return (
        <div>
          <div>Ім'я: {this.state.name}, вік: {this.state.age}</div>
          <button onClick={this.handleClick}>Змінити дані</button>
        </div>
      );
    }
  }
  export default Task4;
  