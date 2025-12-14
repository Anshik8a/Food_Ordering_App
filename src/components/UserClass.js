import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props); 
    this.state= {
      userInfo : {
        name: "dummy",
        location: "dummy",
        avatar_url: "https://dummy-photo",
      }
    }
    // this.state= {
    //   count : 0,
    // }
    // console.log(this.props.name + "child constructor called")
  }
  async componentDidMount() {
    // console.log(this.props.name +"child component did mount");
    const data = await fetch("https://api.github.com/users/hiteshchoudhary")
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
  render() {
    const {name , location, avatar_url} = this.state.userInfo;
    // const {count} = this.state;
    // console.log(this.props.name +"child render called")
    return (
      <div>
        {/* <h3>Count: {count}</h3>
        <button onClick={()=>{
            this.setState ({
              count : this.state.count + 1,
            })
            }}>Increased</button>
        <button onClick={()=>{
            this.setState ({
              count : this.state.count - 1, 
            })
            }}>decreased</button> */}

          <div className="user-card">
            <img src = {avatar_url} />
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
          </div>  

      </div>
    );
  }
}

export default UserClass;
