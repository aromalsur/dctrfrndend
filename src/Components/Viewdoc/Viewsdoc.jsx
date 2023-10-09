import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Viewsdoc() {
  // const pathparameter=useParams()
  // console.log(pathparameter.id);

  const {id}=useParams()
  console.log(id);
  
  const [docdetails,setdocsdetails]=useState({})

  const fetchData=async ()=>{
    const response=await axios.get(`http://localhost:3001/doctors/${id}`)
    console.log(response.data);
    setdocsdetails(response.data)
  }
  console.log(docdetails);


  useEffect(()=>{
    fetchData()
  },[])
  return (



    <div style={{}}>


      <div className='details1' style={{margin:'40px'}}>
      <Row>

        

      <Col>
        <h5>{docdetails.name}</h5>
        <p>Consulting TIme:{docdetails.available_days}</p>
        <p>[{docdetails.available_hours}]</p>
        <p>email:{docdetails.email}</p>
        <p>Phno:{docdetails.phone}</p>

        {docdetails.map((item)=>(
          <p>{item.patient_name}</p>
        )
        
        )}
        
        </Col>



        <Col style={{textAlign:'center'}}>
      <h1>Reviews</h1>


   

        </Col>



         
      </Row>

      </div>
    </div>
  )
}

export default Viewsdoc