import React from "react";
class Task3 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'Іван',
        age: 25
      };
    }
  
    handleShowName = () => {
      alert(this.state.name);
    }
  
    render() {
      return (
        <div>
          <button onClick={this.handleShowName}>Показати ім'я</button>
        </div>
      );
    }
  }
  export default Task3;
  