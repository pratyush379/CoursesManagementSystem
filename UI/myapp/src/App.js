import logo from './logo.svg';
import './App.css';

import { Button, Row, Col, Container } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Components/Home';
import Course from './Components/Course';
import AllCourses from './Components/AllCourses';
import AddCourse from './Components/AddCourse';
import Header from './Components/Header';
import Menu from './Components/Menu';
import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Contact from './Components/Contact';
import About from './Components/About';
import UpdateCourse from './Components/UpdateCourse';

function App() {
  const btnHandle = () => {
    toast("firsr message")
  }
  return (

    <>
      <ToastContainer />
      <Header />
      <Container>
        <Row>
          <Col md={4}>
            <Menu />
          </Col>
          <Col md={8}>
            <Routes>

              <Route exact path='/home' element={<Home />}></Route>
              <Route exact path='/add-course' element={<AddCourse />}></Route>
              <Route exact path='/view-course' element={<AllCourses />}></Route>
              
          <Route  path="/update" element={<UpdateCourse />} > </Route>
          
          {/* <Link to={{pathname:'/view-course/update',
          state:{myId:"jo"}}}></Link> */}
           
        
              <Route exact path='/about' element={<About />}></Route>
              <Route exact path='/contact-us' element={<Contact />}></Route>
            </Routes>
          </Col>
        </Row>
      </Container>





    </>

  );
}

export default App;
