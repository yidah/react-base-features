import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <h2>User Output</h2>
            <p>Username: {props.username}</p>
        </div>

    );
};

export default userOutput;