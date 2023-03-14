import React from "react";
class Task8 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        show: false,
        name: 'Іван',
        age: 25,
        buttonText: 'показати'
      };
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
      this.setState(state => ({
        show: !state.show,
        buttonText: state.show ? 'показати' : 'сховати'
      }));
    }
    
    render() {
      return (
        <div>
          {this.state.show &&
            <div>
              <p>ім'я: {this.state.name}, вік: {this.state.age}</p>
            </div>
          }
          <button onClick={this.handleClick}>{this.state.buttonText}</button>
        </div>
      );
    }
  }
export default Task8; 