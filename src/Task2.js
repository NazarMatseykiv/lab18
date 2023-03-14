import React from 'react';

class Task2 extends React.Component {
  showMessage = () => {
    alert('hello');
  }

  render() {
    return (
      <div>
        <button onClick={this.showMessage}>Натисніть мене</button>
      </div>
    );
  }
}

export default Task2;
