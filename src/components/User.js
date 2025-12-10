import { useState } from "react";
const User = ({name}) => {
    const [count] = useState(0);
    const [count2] = useState(7);
    return (
        <div>
            <h1>{name}</h1>
            <h2>count: {count}</h2>
            <h2>count2: {count2}</h2>
        </div>
    )
};

export default User;