import React from 'react';

const User=(props)=>{
    console.warn(props.data.name);
    const {data} = props;
    return(
        <div>
            <h1>THIS is User compo</h1>
            <h2>{data.name}</h2>
            <h2>{data.age}</h2>
            <h2>{data.add}</h2>
        </div>
    )
}

export default User;