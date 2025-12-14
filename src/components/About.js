import UserClass from "./UserClass";
import User from "./User";
import React from "react";

class About extends React.Component {
  constructor (props) {
    super(props);
    // console.log("parent constructor ");
  }
  componentDidMount() {
    // console.log("parent component did mount");

  }

  render (){
    // console.log("parent render ");
    return (
          <div>
            <h1>This ia About Page class Component!!</h1>
            {/* <User name = {"Anshika function Component"}/> */}
            <UserClass name = {"anshika first"} location={"Delhi"}/>
          </div>
    )
   }
}


// const About = () => {
//   return (
//     <div>
//         <h1>This ia About Page!!</h1>
//         {/* <User name = {"Anshika function Component"}/> */}
//         <UserClass name = {"anshika class component"} location={"Delhi"}/>
//     </div>
//   );
// };

export default About;