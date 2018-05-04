import React, { Component } from 'react'
import {JobList} from '../JobList/JobList'
import { FormGroup, FormControl, HelpBlock, ControlLabel, Checkbox, Button} from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class JobFilter extends Component {
  constructor(props){
    super(props)

    this.state = {
      filters: {
        description: '',
        location: '',
        position: '',
        fullTime: '',
        partTime: '',
        contract: '',
      }
  }
}
 handleChange = (e) => {
   const { filters } = this.state
   const field = e.target.id

   this.setState({ filters: {...filters, [field]: e.target.value} });
 }

 handleOnSearch = () => {
   const { setFilters } = this.props
   const { filters } = this.state

   console.log('setFilters', filters)
   setFilters(filters)
 }

  render() {
    const { description, location, position } = this.state
    return (
      <form>        
          <FieldGroup
            id="description"
            type="text"
            label="Description"
            value={description}
            onChange={this.handleChange}
          />
          <FieldGroup
            id="location"
            type="text"
            label="Location"
            value={location}
            onChange={this.handleChange}
          />
          <FieldGroup
            id="position"
            type="text"
            label="Position"
            value={position}
            onChange={this.handleChange}
          /> 
          <FormGroup>
          <Checkbox id="fullTime" onChange={this.handleChange}>Full Time</Checkbox>
          <Checkbox id="partTime" onChange={this.handleChange}>Time Parcial</Checkbox>
          <Checkbox id="contract" onChange={this.handleChange}>By Contrat</Checkbox>
          </FormGroup>                  
          <Button onClick={this.handleOnSearch}>Search</Button>                  
      </form>
    )
  }
}

export default JobFilter
