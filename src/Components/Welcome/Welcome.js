import React from 'react';


function Welcome(props) {
    console.log(props)
    let name = props.match.params.name || props.name
    // console.log(props.match.params.name)
    return (
        <div className="Welcome">
            Welcome, {name}
        
        </div>
    )
}


export default Welcome;