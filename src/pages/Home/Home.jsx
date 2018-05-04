import React, { Component } from 'react'

import { JobList, JobFilter } from '../../components'
import { getJobs, getRecommendedJobs, getJsonPJobs, getJsonPRecommended } from '../../api'
import styles from './Home.sass'
import Pagination from "react-js-pagination";
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap'
import Footer from '../../components/Footer/Footer';

class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      jobs: null,
      recommended: null,
      filters: {
          description: '',
          location: '',
          position: '',
          fullTime: '',
          partTime: '',
          contract: '',
      },
      recent: [],
      activePage: 1,
    }
  }

  componentDidMount(){
    //this.getJobswithFilters()
    //this.getJobsRecommended()
    this.getJsonP()
    this.getRecommendedJobsJsonP()
  }

  componentDidUpdate(_, prevState) {
    const { filters: prevFilters } = prevState
    const { filters } = this.state

    if(isEqual(prevFilters, filters)) return

    //this.getJobswithFilters()
    this.getJsonP()
    this.setState({ jobs: null })
  }

  render() {
    const { jobs, filters, recommended, activePage } = this.state
    const length = jobs != null ? jobs.length : 0;    
    const end = activePage * 5;
    const begin = end - 5;
    const jobs_Paginated = jobs != null ? jobs.slice(begin, end) : null;

    return (
      <React.Fragment>
        <Grid>
          <Row className="show-grid">
          <Col xs={12} md={4} lg={4}>
            <JobFilter filters={filters} setFilters={this.setFilters} />
          </Col>        
          <Col xs={12} md={4} lg={4}>
          <h2>Search Result</h2>
            <Jumbotron>              
              <JobList jobs={jobs_Paginated} panel_color="success" />
              <div className="container">
              <Pagination
                activePage={activePage}
                itemsCountPerPage={5}
                totalItemsCount={length}
                pageRangeDisplayed={5}
                onChange={this.handlePageChange}
              />                  
              </div>
            </Jumbotron>
          </Col>                
          <Col xs={12} md={4} lg={4}>
            <h2>Recommended For You</h2>
            <JobList jobs={recommended} panel_color="primary" />
          </Col>  
          </Row>
        </Grid>        
        <Footer />
      </React.Fragment>      
    )
  }

  setFilters = (filters) => {
    this.setState({ filters })
  }

  handlePageChange = (activePage) => {      
    this.setState({ activePage: activePage });
}

  getJobswithFilters = () => {
    const { filters } = this.state
      getJobs(filters)
      .then((res) => {
          this.setState({ jobs: res.data })
      })
      .catch((error) => {console.log(error)})
  }

  getJobsRecommended = () =>{    
    getRecommendedJobs().then((res) => {
      this.setState({ recommended: res.data.splice(0,3) })
  })
  .catch((error) => {console.log(error)})
  }

  getJsonP = () => {
    const { filters } = this.state
    getJsonPJobs(filters).then(res => res.json())
    .then(response => {
      this.setState({ jobs: response })
  })
  .catch((error) => {console.log(error)})
  }

  getRecommendedJobsJsonP = () =>{
    getJsonPRecommended().then(res => res.json())
    .then((res) => {
      this.setState({ recommended: res.splice(0,3) })
  })
  .catch((error) => {console.log(error)})
  }

  /*getJsonP = () => {
    const { filters } = this.state
    getJsonPJobs(filters).then(response => {
      this.setState({ jobs: response })
  })
  .catch((error) => {console.log(error)})
  }

  getRecommendedJobsJsonP = () =>{
    getJsonPRecommended().then((res) => {
      this.setState({ recommended: res.splice(0,3) })
  })
  .catch((error) => {console.log(error)})
  }*/
}

function isEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2)
}

export default Home
