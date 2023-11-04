import React from 'react';

function HrInfo() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if(!userInfo){
        window.location.href = '/login'
    }
    const {name, email, organisation} = userInfo;
    console.log(name,email,organisation,userInfo)
    return ( <div>
        <div>{name}</div>
        <div>{email}</div>
        <div>{organisation}</div>
    </div> );
}

export default HrInfo;