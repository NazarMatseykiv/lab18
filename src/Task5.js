import React from "react";
class Task5 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {show: true, name: 'Іван'};
      }
      toggleShow = () => {
        this.setState(prevState => ({
          show: !prevState.show
        }));
      }
      render() {
        return (
          <div>
            {this.state.show ? <p>Привіт, {this.state.name}!</p> : <p>Пока, {this.state.name}</p>}
            <button onClick={this.toggleShow}>Змінити вітання</button>
          </div>
        );
      }
            
}
export default Task5;