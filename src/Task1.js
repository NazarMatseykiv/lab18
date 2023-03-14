import React from 'react';
class Task1 extends React.Component {

  state = {name: 'Іван', age: 25};

  render() {
    return (
      <div>
        <p>Ім’я: {this.state.name}, вік: {this.state.age}</p>
      </div>
    );
  }
}
export default Task1;
