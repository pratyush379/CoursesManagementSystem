import React,{useEffect} from 'react'
import { Card, CardText, CardImg, CardTitle, CardImgOverlay, Button, Container } from 'reactstrap';
import { toast } from 'react-toastify';
export default function () {
    useEffect(()=>{
        document.title='all courses'
    },[]) //using [] this it will work only on componentMount not on ComponentUpdate

    const about = () => {
        toast.success("Hi my name is Pratyush",{
        position:'bottom-center'
    })}
    return (
        <>
 
            <Container style={{width:'100%'}}>
                <Card inverse style={{ backgroundColor: 'grey', color: 'white' , textAlign:'center' , width:'100%' , left:'0' }}>

                    <CardTitle tag="h5">
                       <h2> hello there !</h2>
                    </CardTitle>
                    <CardText>
                        <h3>BackEnd technology used:</h3>
                        <h4>Spring boot , Rest Api, hiebernate </h4>
                        <h3>Frontend technology:</h3>
                        <h4>React</h4>
                        <h3>Database:</h3>
                        <h4>Mysql</h4>
                    </CardText>
                   


                </Card>
            </Container>

        </>
    )
}
