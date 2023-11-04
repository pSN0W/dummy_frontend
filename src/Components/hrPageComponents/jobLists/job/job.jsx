import React from 'react';

function Job({id, title, location, created_at}) {
    return ( <div>
        <p>{title}</p>
        <p>{location}</p>
        <p>{created_at}</p>
        <a href={`/jobs/${id}`}>{id}</a>
    </div> );
}

export default Job;