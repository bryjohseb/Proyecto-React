import React, { Component } from 'react'
import Footer from '../../components/Footer/Footer'
import { Grid, Row, Col, Table } from 'react-bootstrap'

const ContactUs = () => (
    <React.Fragment>
        <Grid>
          <Row className="show-grid">
          <Col xs={12} md={3} lg={3}>
            <h1>Foto del Grupo</h1>
          </Col>        
          <Col xs={12} md={6} lg={6}>
          <Table responsive striped bordered>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Number</th>
                    <th>Email</th>
                </tr>                
            </thead>
            <tbody>
                <tr>
                    <td><h3>Bryan Murillo</h3></td>
                    <td>
                        <h3>87496482</h3>
                    </td>
                    <td><h3>bryanmuro74@gmail.com</h3></td>
                </tr>    
                <tr>
                <td><h3>Jimmy Morales</h3></td>
                    <td>
                        <h3>61942162</h3>
                    </td>
                    <td><h3>newtronj@gmail.com</h3></td>
                </tr>    
                <tr>
                    <td><h3>David Chacon</h3></td>
                    <td>
                        <h3>84135078</h3>
                    </td> 
                    <td><h3>davidchacon93@hotmail.com</h3></td>
                </tr>   
                <tr>
                    <td><h3>Isaac Corrales</h3></td>
                    <td>
                        <h3>89881077</h3>
                    </td> 
                    <td><h3>isakucorrales@gmail.com</h3></td>
                </tr>                    
            </tbody>
          </Table>
          </Col>                
          <Col xs={12} md={3} lg={3}>
            <h1>UNA Info</h1>
          </Col>  
          </Row>
        </Grid>        
        <Footer />
      </React.Fragment>      
);

export default ContactUs;