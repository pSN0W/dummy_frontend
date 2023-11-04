import React,{ useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { listJobs } from '../../../Actions/jobActions';
import Job from './job/job';

function JobList() {
    const dispatch = useDispatch();
    // states for getting notes list
	const { error, loading, jobs } = useSelector(
		(state) => state['jobList']
	);

    useEffect(() => {
		dispatch(listJobs());
	}, []);
    return ( <div>
        {loading && <div>Loading</div>}
        {jobs.map(job=><Job key={job.id} {...job} />)}
    </div> );
}

export default JobList;
