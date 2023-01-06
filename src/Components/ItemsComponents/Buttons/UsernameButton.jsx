import React from "react";
import { useState } from "react";


function UsernameButton(props){

    const [username, setUsername] = useState('محمد عبد الرحمن')
    
    return (
        <button onClick={props.onClick} className="usernameButton">{username}</button>
    )
}

export default UsernameButton