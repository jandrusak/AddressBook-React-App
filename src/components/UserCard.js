import React from 'react'
import '../App.css'


const UserCard = (props) => {
    console.log(props)

  return (
    <div className='user-card'>
            <p>{props.user.name.first} {props.user.name.last}</p>
            <img src = {props.user.picture.thumbnail} alt={`${props.user.name.first} ${props.user.name.last}`}/>
    </div>
  )
}

export default UserCard