import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Doccard.css'
import { Link } from 'react-router-dom';


function Doccard({doctors}) {
    console.log(doctors);
  return (
    <div className='main'>
            <Link to={`/view/${doctors.id}`}   style={{textDecoration:'none'}}>

            <Card style={{ width: '24rem' }}>
     
     <Card.Body>
       <Card.Title> <h3> {doctors.name}</h3>({doctors.specialty})</Card.Title>
       <Card.Text>
        <h5>{doctors.hospital}</h5>
       </Card.Text>
     </Card.Body>
     <ListGroup className="list-group-flush">
       <ListGroup.Item> <p>Address:{doctors.address}</p> </ListGroup.Item>

      
     </ListGroup>
     <Card.Body>
   
     </Card.Body>
   </Card>
            
            </Link>


    </div>
  )
}

export default Doccard