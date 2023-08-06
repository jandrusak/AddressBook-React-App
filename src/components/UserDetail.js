import React from 'react'
import '../App.css'


const UserDetail = (props) => {
    console.log(props)
  return (
    <div className='details'>
        <p>
            Username: {props.user.login.username}<br/>
            Email: {props.user.email} <br/>
            Age: {props.user.dob.age} <br/>
            Gender: {props.user.gender}<br/>
            Location: {props.user.location.city}<br/>
            Phone: {props.user.phone}<br/>
            Registration Date: {props.user.registered.date}           
        </p>        
    </div>
  )
}

export default UserDetail