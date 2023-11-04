import React from 'react';

function Application({name, email, rating, resume_url}) {
    return ( <div>
        <p>{name}</p>
        <p>{email}</p>
        <p>{rating}</p>
        <p>{resume_url}</p>
    </div> );
}

export default Application;