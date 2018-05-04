import React, { Component } from 'react'
import Footer from '../../components/Footer/Footer'
import { Table } from 'react-bootstrap'

const About = () => (
    <React.Fragment>
        <center>
        <h2>Project</h2>     
        <p>On this project we have investigated and learned about the library called ReactJs in order to 
            realize consume information from an Github's api jobs</p>
        <Table responsive striped bordered>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Photo</th>
                    <th>Position</th>
                </tr>                
            </thead>
            <tbody>
                <tr>
                    <td>Bryan Murillo</td>
                    <td>
                        <div>
                        <img width={300} height={200} alt="900x500" src="img/bryan.jpg"/>
                        </div>
                    </td>
                    <td>Student</td>
                </tr>    
                <tr>
                    <td>Jimmy Morales</td>
                    <td>
                        <div>
                        <img width={300} height={200} alt="900x500" src="img/jimmy.jpg"/>
                        </div>
                    </td>
                    <td>Student</td>
                </tr>    
                <tr>
                    <td>David Chacon</td>
                    <td>
                        <div>
                        <img width={300} height={200} alt="900x500" src="img/david.jpg"/>
                        </div>
                    </td>
                    <td>Student</td>
                </tr>            
                <tr>
                    <td>Isaac Corrales</td>
                    <td>
                        <div>
                        <img width={300} height={200} alt="900x500" src="img/isaac.jpg"/>
                        </div>
                    </td>
                    <td>Student</td>
                </tr>                 
            </tbody>
        </Table>
        </center>
        <Footer />
      </React.Fragment>      
);

export default About;