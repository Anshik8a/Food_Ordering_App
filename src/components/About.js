import UserClass from "./UserClass";
import User from "./User";

const About = () => {
  return (
    <div>
        <h1>This ia About Page!!</h1>
        {/* <User name = {"Anshika function Component"}/> */}
        <UserClass name = {"anshika class component"} location={"Delhi"}/>
    </div>
  );
};

export default About;