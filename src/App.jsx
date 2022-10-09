import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUsers from './components/FormUsers'
import ShowForm from './components/ShowForm'
import UserCard from './components/UserCard'

const baseURL = 'https://users-crud1.herokuapp.com'


function App() {

  const [users, setUsers] = useState()
  const [updateInfo, setUpdateInfo] = useState()
  const [showForm, setShowForm] = useState(false)

  const getAllUsers = () => {
    const URL = `${baseURL}/users/`
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }
  
  useEffect(() => {
    getAllUsers()
  }, [])
  
  const createNewUser = data => {
    const URL = `${baseURL}/users/`
    axios.post(URL, data)
      .then(() => getAllUsers())
      .catch(err => console.log(err))
  }

  const deleteUserById = id => {
    const URL = `${baseURL}/users/${id}/`
    axios.delete(URL)
      .then(() => getAllUsers())
      .catch(err => console.log(err))
  }

  const updateUserById = (id, data) => {
    const URL = `${baseURL}/users/${id}/`
    axios.patch(URL, data)
      .then(() => getAllUsers())
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <h1 className='App_tittle'>Users</h1>
      {
      showForm
      ?
      <FormUsers 
        createNewUser = {createNewUser}
        updateInfo={updateInfo}
        setUpdateInfo={setUpdateInfo}
        updateUserById={updateUserById}
        setShowForm={setShowForm}
        showForm={showForm}
      />
      :
      ''
      }
      <div className='users'>
        {
        users?.map(user => (
          <UserCard 
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
            setShowForm={setShowForm}
            showForm={showForm}
          />
        ))
        }
      </div>
      <ShowForm 
        setShowForm={setShowForm}
        showForm={showForm}
      />
    </div>
  )
}

export default App
