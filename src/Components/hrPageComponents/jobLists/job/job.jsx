import React from 'react';

function Job({id, title, location, created_at}) {
    return ( <div>
        <p>{title}</p>
        <p>{location}</p>
        <p>{created_at}</p>
        <p>{id}</p>
    </div> );
}

export default Job;