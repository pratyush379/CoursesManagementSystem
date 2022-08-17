import React from 'react'
import {ListGroup,ListGroupItem} from 'reactstrap';
import {Link} from 'react-router-dom';
export default function 
() {
  return (
    <div>
        <ListGroup>
            <Link className='list-group-item list-group-item-action'   tag='a' to='/home'>
                Home
            </Link>
            <Link className='list-group-item list-group-item-action'  tag='a' to='/add-course'>
                Add courses
            </Link>
            <Link className='list-group-item list-group-item-action'  tag='a' to='/view-course'>
                View Courses
            </Link>
            <Link className='list-group-item list-group-item-action'  tag='a' to='/about'>
                About
            </Link>
            <Link className='list-group-item list-group-item-action'  tag='a' to='/contact-us'>
                Contact
            </Link>
        </ListGroup>
    </div>
  )
}
