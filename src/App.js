import React, { useState, useEffect } from 'react';
import UsersList from './components/usersList';
import './App.css'
import axios from 'axios'



function App() {
  const [users, setUsers] = useState([]);
  
 const fetchUser = async () => {
    await axios.get('https://randomuser.me/api?results=25')
    .then((response) => {
      // console.log(response.data.results)
      setUsers(response.data.results)
    }) 
  }

  useEffect(() => {
    fetchUser();
  }, []);

 console.log(users)


  return (
    <div className="App">
      <header className="App-header">
        <UsersList users={users}/>
      </header>
    </div>
  );
}

export default App;
