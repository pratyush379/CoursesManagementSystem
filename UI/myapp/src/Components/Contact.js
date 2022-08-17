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
                        Hello there !
                    </CardTitle>
                    <CardText>
                        <h3>Phone : XXXXX30XXX</h3>
                        <h3>Gmail : pratyushXXX@gmail.com</h3>
                    </CardText>
                    <Container>
                        <Button color = "danger" className='my-3' outline onClick={about}>Developer</Button>
                    </Container>


                </Card>
            </Container>

        </>
    )
}
