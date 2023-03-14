import React from "react";
class Task7 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'Іван',
        age: 25,
        isShown: false, // додали змінну isShown
      };
    }
  
    toggleShow = () => {
      this.setState(prevState => ({
        isShown: !prevState.isShown, // змінюємо стан на протилежний
      }));
    }
  
    render() {
      return (
        <div>
          {this.state.isShown && (
            <p>ім'я: {this.state.name}, вік: {this.state.age}</p>
          )}
          <button onClick={this.toggleShow}>Натисни на мене</button>
        </div>
      );
    }
  }
export default Task7; 