import React, { useState } from 'react'
import UserCard from './UserCard'
import UserDetail from './UserDetail'
import '../App.css'

const UsersList = (props) => {
    const [showDetails, setShowDetails] = useState({});

    const toggleDetails = (index) => {
        setShowDetails((prevState) => ({
            ...prevState, 
            [index]: !prevState[index],
        }));
    }

    console.log(props)
  return (
    <div className='profile'>
        <ol>
            {props.users.map((user, index)=>(
            <li key={index}>
                <UserCard user={user}/>
                <button onClick= {() => toggleDetails(index)}>
                    {showDetails[index] ? 'Show Less' : 'Show More'}
                </button>
                   {showDetails[index] && <UserDetail user={user}/>}
            </li>
            ))}
        </ol>
    </div>
  )
}

export default UsersList

