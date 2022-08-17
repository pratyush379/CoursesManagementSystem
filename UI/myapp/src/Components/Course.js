
import React,{useNavigate} from 'react'
import {  toast } from 'react-toastify';
import {Card,CardBody,CardSubtitle,CardText,Button,Container} from 'reactstrap';
import axios from 'axios';
import base_url from '../api/api';
import UpdateCourse from './UpdateCourse';
import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
  NavLink
} from "react-router-dom";
export default function Course(props) {
  
  const deleteCourseById = (id)=>{
    axios.delete(`${base_url}/courses/${id}`).then(
        ()=>{
          toast.success("course deleted",{
            position:'bottom-center'
        })
          props.updateCourseById(id);
        },
        ()=>{
            toast.warning("course not deleted ! something went wrong",{
                position:'bottom-center'
            })
        }
    )
  }

//   const navigate = useNavigate();

//     const navigateToUpdateCourse = () => {
//       //  navigate to /
//       navigate('/update');
//  //   console.log(id)
//     };



    return (
    <Container>
    <Card>
        <CardBody>
            <CardSubtitle>
{props.title}
            </CardSubtitle>
            <CardText>
{props.description}
            </CardText>
            <Container className="text-center">
                <Button color='danger' className='mx-2' onClick={()=>{
                    deleteCourseById(props.id)}}>Delete</Button>
                {/* <Link color='warning' to={{pathname:"/view-course/update",
              state : {id : props.id} }}>Update</Link> */}
            <NavLink to='/update'
          state={{from: props.id}}>  <Button color='warning'></Button></NavLink>
            </Container>
        </CardBody>
    </Card>
     
    </Container>
  )
}
