import React, { useEffect, useState } from 'react'
import axios, { all } from 'axios'
import Doccard from '../Doccard/Doccard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




function Alldoc() {

  const [Alldoc,setAlldoc]=useState([])
  // To hold all details as in the form of array



  const fetchData=async()=>{
    const response=await axios.get('http://localhost:3001/doctors')
   
    setAlldoc(response.data)
   
  }
  console.log(Alldoc);
  useEffect(()=>{
    fetchData()//function call
  },[])



  return (
    <div>

  <Row>

  {
      Alldoc.map((item)=>(
        
        <Col>
        
        <Doccard  doctors={item}/>
        
        
        </Col>


      ))
    }
      
  </Row>
      
      </div>
  )
}

export default Alldoc