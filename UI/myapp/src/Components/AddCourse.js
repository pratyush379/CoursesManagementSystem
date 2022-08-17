
import React,{useEffect,useState} from 'react'
import {Form,FormGroup,Col,Label,Input,Button,Container} from 'reactstrap'
import axios from 'axios';
import base_url from '../api/api';
import { toast } from 'react-toastify';
export default function () {

    useEffect(()=>{
        document.title='update courses'
    },[]) 


    const [course,setCourse] = useState({});

    //form handler function
    const handleForm = (e) =>{
        console.log(course);
        postDataOnServer(course);
        e.preventDefault();
    };

    const postDataOnServer = (data) =>{
axios.post(`${base_url}/courses`,data).then(
    (response)=>{
console.log(response);
toast.success("course added successfully",{
    position:'bottom-center'
})
    },
    (error)=>{
        console.log(error);
        toast.success("course not added ! something went wrong",{
            position:'bottom-center'
        });
    }
)
    };

    return (
    <div>
        <h1 className='text-center my-2'>Fill course detail</h1>
<Form>
    <FormGroup row>
        <Label for="userId" sm={2}>Course Id</Label>
       <Col sm={10}> <Input type='number' placeholder='enter course id' name='userId' id='userId' onChange={(e)=>{setCourse({...course,id:e.target.value})}}></Input></Col>
    </FormGroup>

    <FormGroup row>
        <Label for="title" sm={2}>Course title</Label>
        <Col sm={10}>   <Input type='text' placeholder='enter course title' id='title' onChange={(e)=>{setCourse({...course,title:e.target.value})}}></Input></Col>
    </FormGroup>

    <FormGroup row >
        <Label for="description" sm={2}>Course Id</Label>
        <Col sm={10}>   <Input type='textarea' placeholder='enter course description'  id='description' style={{height:'300px'}} onChange={(e)=>{setCourse({...course,description:e.target.value})}}></Input></Col>
    </FormGroup>

    <Container className='text-center'>
        <Button color='success' className='mx-2' onClick={handleForm}>Add course</Button>
        <Button type='reset' color='warning'>clear</Button>
    </Container>
</Form>

    </div>
  )
}
