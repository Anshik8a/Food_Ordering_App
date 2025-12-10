import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props); 
    this.state= {
      count : 0,
    }
  }

  render() {
    const {name , location} = this.props;
    const {count} = this.state;
    return (
      <div>
        <h3>Count: {count}</h3>
        <button onClick={()=>{
            this.setState ({
              count : this.state.count + 1,
            })
            }}>Increased</button>
        <button onClick={()=>{
            this.setState ({
              count : this.state.count - 1, 
            })
            }}>decreased</button>
      </div>
    );
  }
}

export default UserClass;
