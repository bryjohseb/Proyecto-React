import React, { Component } from 'react'
import {Panel, Button} from 'react-bootstrap'

import './JobList.css'

function JobList ({ jobs, panel_color }) {
  if(!jobs) return <h1>Loading...</h1>

  if(!jobs.length) return <p>No Job Matched with the selected parameters</p>

  return (
    <div className="jobList">
      {jobs.map((job) =>
        <Job key={job.id} {...job} color={panel_color}/>
      )}
    </div>
  )
}

function Job(job_Data){    
  //let entirePage = JSON.stringify(job_Data.description);  
  //console.log(entirePage.replace(/<.*?>/gm, ''));
  return (
    <Panel bsStyle={job_Data.color}>
      <Panel.Heading>{job_Data.title}</Panel.Heading>       
      <Panel.Body>
        <img width={200} height={200} src={job_Data.company_logo}/>
        <h4>Location: {job_Data.location}</h4>
        <h4>Type: {job_Data.type}</h4>        
        <a href={job_Data.company_url}>Company Name: {job_Data.company}</a>        
        <Button className="primary">See description</Button>
      </Panel.Body>            
    </Panel>    
  )
}
export default JobList
