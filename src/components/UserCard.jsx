import React from 'react'
import './styles/userCard.css'

const UserCard = ({user, deleteUserById, setUpdateInfo, setShowForm, showForm}) => {

  const handleEdit = () => {
    setShowForm(!showForm)
    setUpdateInfo(user)
  }

  return (
    <article className='user_card'>
        <h2 className='user_card_tittle'>{`${user.first_name} ${user.last_name}`}</h2>
        <ul className='user_card_info'>
            <li><span>Email: </span>{user.email}</li>
            <li><span>Birthday: </span>{user.birthday}</li>
        </ul>
        <footer className='user_card_button'>
            <i onClick={() => deleteUserById(user.id)} className="fa-solid fa-trash-can"></i>
            <i onClick={handleEdit} className="fa-solid fa-pen"></i>
        </footer>
    </article>
  )
}

export default UserCard