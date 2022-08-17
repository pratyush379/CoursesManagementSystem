import React,{useState , useEffect } from 'react'
import Course from './Course';
import axios from "axios";
import base_url from '../api/api';
import {  toast } from 'react-toastify';

export default function AllCourses() {
    
    useEffect(()=>{
        document.title='all courses'
    },[]) //using [] this it will work only on componentMount not on ComponentUpdate

//function to call the server
const getAllCoursesFromServer = () =>{
    axios.get(`${base_url}/courses`).then(
        (response)=>{
            //success
            console.log(response.data)
            // toast.success("course has benn loaded",{
            //     position:'bottom-center'
            // })
            setCourse(response.data)
        },
        (error) =>{
            //error
            console.log(error)
            toast.error("coures has benn loaded")
        }
    );
};

useEffect(()=>{
   getAllCoursesFromServer()
},[]) //using [] this it will work only on componentMount not on ComponentUpdate


    const[courses,setCourse] = useState([
        
    ]);

    const updateCourseById=(id)=>{
setCourse(courses.filter((c)=>c.id!=id))
    };
    return (
    <div>
    <h1>all contents</h1>
    <p>list of courses</p>
    {

        courses.length>0 ? courses.map((item)=>
            <Course key={item.id} id = {item.id} title={item.title} description={item.description} updateCourseById={updateCourseById}/>
        ): "no courses"
    }
    </div>
  )
}
